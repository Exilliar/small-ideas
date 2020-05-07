# Typescript!

These are for programs made in typescript (suprisingly enough). Despite typescript and js being very similar I chose to have 2 separate folders just to have the slight distinction from whether I can have types/interfaces/etc and when I can't.

## Setting up a new project

There is a bash script which will handle setting up a new project.

To run it use command `bash tsCreate.bash projectName`

This script must be run from this directory. It must contain a project name and that project name must not already be a file.

An example of the structure it creates is in ./example

Further info can be found in the readme for the generated project

## How to run each file

Each project should have a `tsconfig.json` file.

To compile the project run `tsc` which should compile the project then `node mainTsFile.js` to run it.

## How to set up jest in a file

### This isn't really needed if the bash script was used

1. Move code into ./src file (not neccassery but makes it look nicer)
2. Run `npm init` the only input that matters is that the answer to the testing q should be `jest`
3. Copy paste the `jest.config.js` file that is in this file
4. Write the tests in a ./test folder (at the same level as the ./src folder). The file should be called `name.test.ts`
5. Run `npm t` to run the test

Anything goes wrong check [this repo](https://github.com/ChiragRupani/TSUnitTestsSetup) and [this article](https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40)
