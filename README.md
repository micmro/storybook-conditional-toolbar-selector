# storybook-conditional-toolbar-selector

Helper addon to define story specific toolbar dropdown to use in custom decorators, similar to [globals](https://storybook.js.org/docs/react/essentials/toolbars-and-globals) but with multiple variants.

e.g. for multiple sets of themes backend editor vs frontend site, property specific components

## Example usage

### Setup

register addon in `.storybook/main.js` or `.storybook/main.ts`

```javascript
module.exports = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-conditional-toolbar-selector", // add here
    /// ...
  ],
};
```

Define available sets and options in `.storybook/preview.js` or `.storybook/preview.ts`

```javascript
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  customConditionalToolbar: {
    /** Defines the possible sets that can be shown */
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
    ],
    /** Icon to use in toolbar, defaults to `switchalt`. All possible icons here: https://storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels */
    icon: "redirect",
    /** title when hovering over the icon */
    title: "Test title",
    /** Setting disable to true makes the addon disabled by default */
    // disable: true,
  },
};
```

Use the `customConditionalToolbar` parameter in you story to define if and which set to use:

```javascript
export const MyStory = Template.bind({});
MyStory.parameters = {
  customConditionalToolbar: {
    setToUse: "set-b",
    defaultOption: "b2",
  },
};
```

### Story Parameter API

### Consumption

- Per Set selection persists across stories until refresh/reload of storybook
-
