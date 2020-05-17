# dijkstra

Basic Dijstra's algorithm script.

More info on Dijstra's algorithm can be found on the [wiki](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm).

The only part of the script that is not completely normal is that it uses an array of nodes rather than a queue to find the next node to search. The array is sorted to the shortest distance first and then the next node is found from that. A queue is not used is for simplicity. I'm not really sure how to use queues yet (or at least how to use them in typescript), so just went for a simplier implementation (from my perspective).

## Compiling/running

Use command `tsc` when in the ./src folder to compile the project. This will generate .js files that can then be run with `node projectName.js`.

For more info on typscript see the [docs](https://www.typescriptlang.org/docs/home.html)

NOTE The js files will not be visible in vscode, this can be changed in the settings.json in .vscode. The files will still be there to be run regardless

## Testing

By default this uses jest for testing. To run the test, create the test files in the ./tests folder with the name `name.test.ts`. Then use command `npm t` to run the test.

For more info on jest see the [docs](https://jestjs.io/docs/en/getting-started)
