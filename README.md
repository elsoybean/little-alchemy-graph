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
