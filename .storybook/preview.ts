import { ConditionalToolbarSelectorParameter } from "../src/types";

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
    ],
    icon: "redirect",
    title: "Test title",
    // disable: false,
  } as ConditionalToolbarSelectorParameter,
};
