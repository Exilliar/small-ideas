# aStar

A script for finding the shortest path between a set of nodes using the A\* algorithm. Very similar to the Dijkstra's Algorithm script, the PriorityQueue class is even the exact same in both scripts.

More info on the theory behind the A* algorithm can be found [here](https://en.wikipedia.org/wiki/A*\_search_algorithm)

## Setup

Examples of how the nodes need to be set up can be seen in the `tests/aStart.text.ts` file.

Basic structure is:

1. "nodes" need to be created. The constructor for the nodes must include whatever heuristic is being used. The first node must also have it's default distance set to 0, do this by adding an extra input of 0 when creating the object (e.g. `let a = new Node("A", 21, 0);` rather than `let b = new Node("B", 14);`)
2. The paths between those nodes then need to be created. Do this by adding the nodes to the "path" array in each node object. There is no special way to do this, just directly append to the "paths" array. The input must be the node that the path is to, and the "distance"/weighting to the node. These paths must include **all** nodes that are connected to the current node, even if the path has already been created in the opposite direction (e.g. it must be defined that A connects to B and B connects to A)
3. The `aStar` function can then be run by passing in the "start" and "end" nodes

## Compiling/running

Use command `tsc` when in the ./src folder to compile the project. This will generate .js files that can then be run with `node projectName.js`.

For more info on typscript see the [docs](https://www.typescriptlang.org/docs/home.html)

NOTE The js files will not be visible in vscode, this can be changed in the settings.json in .vscode. The files will still be there to be run regardless

## Testing

By default this uses jest for testing. To run the test, create the test files in the ./tests folder with the name `name.test.ts`. Then use command `npm t` to run the test.

For more info on jest see the [docs](https://jestjs.io/docs/en/getting-started)
