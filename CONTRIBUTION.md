# Running the project

## Setup

```bash
# install dependencies
npm i

# install peer dependencies
npm i react react-dom"
```

## Start test storybook

```bash
npm run storybook
```

The config is in `./.storybook` and stories in `./stories`

open `http://localhost:6006`

## Building

```bash
# tests and builds types and js into `./dist/`
npm run build
```

## Publish

```bash
npm version patch # or minor major
# automatically runs the build via `prepublish` script
npm publish
git push --tags
```
