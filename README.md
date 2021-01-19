# storybook-conditional-toolbar-selector

Helper addon to define story specific toolbar dropdown to use in custom decorators, similar to [globals](https://storybook.js.org/docs/react/essentials/toolbars-and-globals) but with multiple variants.

e.g. for multiple sets of themes backend editor vs frontend site, property specific components

## Example usage

### Setup

register addon in `.storybook/main.js` or `.storybook/main.ts`

```javascript
module.exports = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["....."], // add here
};
```

Define available sets and options in `.storybook/preview.js` or `.storybook/preview.ts`

```javascript
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  customConditionalToolbar: {
    sets: [
      {
        id: "set-a",
        options: [
          { id: "a1", title: "My First Option in Set A" },
          { id: "a2", title: "My Second Option in Set B" },
        ],
      },
      {
        id: "set-b",
        options: [{ id: "b1", title: "Set B Option 1" }, { id: "b2" }],
      },
    ], // define the possible sets that can be shown
    icon: "redirect", // icon to use in toolbar. All possible icons here: https://storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels
    title: "Test title", // title when hovering over the icon
  },
};
```

### Consumption
