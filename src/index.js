//@flow

import fetch from "node-fetch";
import cheerio from "cheerio";
import allItems from "./items";
import {
  DgraphClientStub,
  DgraphClient,
  Operation,
  Mutation,
  Request
} from "dgraph-js";

const stub = new DgraphClientStub();
const client = new DgraphClient(stub);

const addCombination = async (c: string, [a, b]: Array<string>) => {
  const combo = `${a} + ${b} => ${c}`;
  console.log(`${combo}`);
  try {
    const req = new Request();
    req.setQuery(`
        query q($a: string, $b: string, $c: string) {
            a as var(func:eq(name,$a))
            b as var(func:eq(name,$b))
            c as var(func:eq(name,$c))
            cmb as var(func:has(created)) @cascade {
                a: ~used_by @filter(uid(a))
                b: ~used_by @filter(uid(b))
                created @filter(uid(c))
            }
        }`);
    const vars = req.getVarsMap();
    vars.set("$a", a);
    vars.set("$b", b);
    vars.set("$c", c);
    req.setMutationsList(
      [
        `uid(a) <name> "${a}" .`,
        `uid(a) <dgraph.type> "Element" .`,
        `uid(a) <used_by> uid(cmb) .`,
        `uid(b) <name> "${b}" .`,
        `uid(b) <dgraph.type> "Element" .`,
        `uid(b) <used_by> uid(cmb) .`,
        `uid(c) <name> "${c}" .`,
        `uid(c) <dgraph.type> "Element" .`,
        `uid(cmb) <created> uid(c) .`,
        `uid(cmb) <dgraph.type> "Combination" .`
      ].map(m => {
        const mu = new Mutation();
        mu.setSetNquads(m);
        return mu;
      })
    );
    req.setCommitNow(true);
    await client.newTxn().doRequest(req);
  } catch (err) {
    console.error(`Error with ${combo}`, err);
  }
};

const getElement = async (name: string) => {
  const res = await fetch(`https://hints.littlealchemy2.com/item/${name}`);
  const html = await res.text();
  const $ = cheerio.load(html);
  if ($(".content-pack-info").length === 0) {
    console.log("Importing", name);
    const pairs = $(".pair")
      .map((i, n) => [
        $(n)
          .find(".item-name")
          .map((i2, n2) => $(n2).text())
          .get()
      ])
      .get();

    for (const pair of pairs) {
      await addCombination(name, pair);
    }
  }
};

(async () => {
  const op = new Operation();
  op.setSchema(`
    type Element {
        name: string
        used_by: [Combination]
    }

    type Combination {
        created: Element
    }

    <created>: uid @reverse .
    <name>: string @index(hash) .
    <used_by>: [uid] @reverse .`);
  await client.alter(op);

  for (const item of allItems) {
    await getElement(item);
  }
})();
