# Remove folders incase the script has already been run in the directory
rm -rf $1

# Create basic folders
mkdir $1
cd $1
mkdir src
mkdir tests
mkdir .vscode

# Create gitignore
echo ".vscode
**/src/*.js
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

# Create the README.md

echo "# "$1 > README.md

# TODO add settings to .vscode folder. Add ts file to src and tests called the same name as the project
