if [ -z "$1" ] || [ -d "$1" ]
then
  if [ -z "$1" ]
  then
    echo "Argument is empty, project name must be first command line argument"
  else
    echo "Directory '$1' already exists"
  fi
else
  # Create basic folders
  mkdir $1
  cd $1
  mkdir src
  mkdir tests
  mkdir .vscode

  # Create gitignore
  echo ".vscode
src/**/*.js
tests/**/*.js
*.js.map
node_modules" > .gitignore

  # Create the jest config
  echo 'module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "node",
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};' > jest.config.js

  # Create the tsconfig.json
  echo '{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true
    }
}' > tsconfig.json

  # Create the README.md

  echo '# '$1'

## Compiling/running

Use command `tsc` when in the ./src folder to compile the project. This will generate .js files that can then be run with `node projectName.js`.

For more info on typscript see the [docs](https://www.typescriptlang.org/docs/home.html)

NOTE The js files will not be visible in vscode, this can be changed in the settings.json in .vscode. The files will still be there to be run regardless

## Testing

By default this uses jest for testing. To run the test, create the test files in the ./tests folder with the name `name.test.ts`. Then use command `npm t` to run the test.

For more info on jest see the [docs](https://jestjs.io/docs/en/getting-started)' > README.md

  # Create basic ts files for src and tests
  touch src/$1.ts
  touch tests/$1.test.ts

  # Create .vscode settings.json file

  echo '{
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.gh": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/src/**/*.js": true,
    "**/tests/**/*.js": true,
    "**/*.js.map": true,
  }
}' > .vscode/settings.json


  # Create the package.json then npm i

  echo '{
  "name": "'$1'",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "test": "tests"
  },
  "dependencies": {
    "@types/jest": "^25.2.1",
    "jest": "^26.0.1",
    "ts-jest": "^25.5.0",
    "typescript": "^3.8.3"
  },
  "devDependencies": {},
  "scripts": {
    "test": "jest"
  },
  "author": "",
  "license": "ISC"
}
  ' > package.json

  npm i

fi
