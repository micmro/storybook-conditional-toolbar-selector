import { ConditionalToolbarSelectorParameter } from "../src/types";
// when consuming the published version you can get the `ConditionalToolbarSelectorParameter` types above via:
// import { ConditionalToolbarSelectorParameter } from "storybook-conditional-toolbar-selector"

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
    // disable: true, // setting this makes the addon disabled by default
  } as ConditionalToolbarSelectorParameter,
};
