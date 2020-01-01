# Little Alchemy 2 Graph

This is a test project to learn about graph databases. I was playing [Little Alchemy 2](https://www.littlealchemy2.com/) with my wife, and it struck me that the relationships between the elements could be modeled in a simple graph. This would accomplish two separate, but equally important goals: learn about DGraph, and ensure that I beat my wife in the game.

## Prerequisites

- Docker
- Node v10.x+

## Populating the Graph

To populate the graph database, we need to screen-scrape the hints site to find all the combinations that make a particular element. This doesn't show you what the element in question can be combined with or what new elements it can make, but those details will emerge from the populated graph. Now, you might think this is "cheating", but I have managed to convince my wife that it is not through a combination of techno-babble and "but it's for work!".

Run the following:

```
npm install
npm run docker-compose up
npm start
```

## Schema

The schema is pretty simple:

```
type Element {
    name: string
    used_by: [Combination]
}

type Combination {
    created: Element
}

<created>: uid @reverse .
<name>: string @index(hash) .
<used_by>: [uid] @reverse .
```

The schema is added to the graph database with an alter operation before we begin populating the database.

## Upsert

The script handles adding all of the nodes and edges to the graphs, but it is worth examining how it does so. It uses an **upsert** request consisting of a **query** block and a list of **mutation**s. The mutations can reference nodes found in the query block, so we do not unnecessarily create nodes that already exist.

```
upsert {
    query($a:string, $b:string, $c:string) {
        a as var(func:eq(name,$a))
        b as var(func:eq(name,$b))
        c as var(func:eq(name,$c))
        cmb as var(func:has(created)) @cascade {
            a: ~used_by @filter(uid(a))
            b: ~used_by @filter(uid(b))
            created @filter(uid(c))
        }
    }
    mutation {
        set {
            uid(a) <name> "name-of-element-a" .
            uid(a) <dgraph.type> "Element" .
            uid(a) <used_by> uid(cmb) .
            uid(b) <name> "name-of-element-b" .
            uid(b) <dgraph.type> "Element" .
            uid(b) <used_by> uid(cmb) .
            uid(c) <name> "name-of-element-c" .
            uid(c) <dgraph.type> "Element" .
            uid(cmb) <created> uid(c) .
            uid(cmb) <dgraph.type> "Combination" .
        }
    }
}
```

This upsert block models the relationship between two Elements, `$a` and `$b`, that combine to create a third, `$c`. You can see that in the query block, we first search for existing Elements with the names matching the passed parameters. This lets us reference the existing (or newly created) node with `uid(a)` in the mutation block. We also find any existing Combination with these three Elements so that we update it rather than create a new one if the script is run multiple times.

In the mutation block, we set the predicates of each Element node and the Combination node. The only scalar value predicate is `name` on the Element, but relationships are set the same way (the `used_by` and `created` predicates). The `dgraph.type` predicate is a special predicate to set type(s) for a node.

## Queries

To query the graph, you can use the built-in Dgraph Ratel interface running at http://localhost:8000/

### Basic Query

This will show the basic relationship between elements and the combinations that can create new elements. However, the graph of all elements is too large, so I am only showing the first 10 results here:

```
query {
  q(func:type(Combination), first: 10) {
    ~used_by {
      name
    }
    created {
      name
    }
  }
}
```

**Result:**

![Basic Query Results](https://i.imgur.com/IV0ahWw.png)

### Element Detail

When you find all uses of a given element, it is removed from your palette since you can't discover anything more with it. To find the remaining combinations, use the following query:

```
query($element:string) {
  q(func:type(Combination)) @cascade {
    known: ~used_by @filter(eq(name,$element))
    other: ~used_by @filter(not eq(name,$element)) { name }
    created {
      name
    }
  }
}
```

_Note that Ratel does not support parameterized queries, so you will have to manually replace `$element` with a string like `"airplane"`_

**Result:**

![Detail Query Result](https://i.imgur.com/LNfyMBw.png)
