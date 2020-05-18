# dijkstra

Basic Dijstra's algorithm script.

More info on Dijstra's algorithm can be found on the [wiki](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm).

This script is very similar to the aStar script. The only difference is that this script does not include any heuristic. The scripts are so similar that the exact same PriorityQueue class is used (this is why the class is so generic). The below "Setup" section below here is also pretty much the same, with only a couple of changes

## Setup

Examples of how the nodes need to be set up can be seen in the `tests/aStart.text.ts` file.

Basic structure is:

1. "nodes" need to be created. The constructor must be given the ID of the node as a string. The first/start node must also have it's default distance set to 0, do this by adding an extra input of 0 when creating the object (e.g. `let a = new Node("A", 0);` rather than `let b = new Node("B");`)
2. The paths between those nodes then need to be created. Do this by adding the nodes to the "path" array in each node object. There is no special way to do this, just directly append to the "paths" array. The input must be the node that the path is to, and the "distance"/weighting to the node. These paths must include **all** nodes that are connected to the current node, even if the path has already been created in the opposite direction (e.g. it must be defined that A connects to B and B connects to A)
3. The `dijstra` function can then be run by passing in the "start" and "end" nodes

## Compiling/running

Use command `tsc` when in the ./src folder to compile the project. This will generate .js files that can then be run with `node projectName.js`.

For more info on typscript see the [docs](https://www.typescriptlang.org/docs/home.html)

NOTE The js files will not be visible in vscode, this can be changed in the settings.json in .vscode. The files will still be there to be run regardless

## Testing

By default this uses jest for testing. To run the test, create the test files in the ./tests folder with the name `name.test.ts`. Then use command `npm t` to run the test.

For more info on jest see the [docs](https://jestjs.io/docs/en/getting-started)
