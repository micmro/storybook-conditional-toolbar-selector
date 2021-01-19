import { PARAM_KEY } from "../src/constants";
import { ConditionalToolbarSelectorParameter } from "../src/types";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  [PARAM_KEY]: {
    sets: [
      {
        id: "set-a",
        options: [
          { id: "Option-A1", title: "Option-A1 title" },
          { id: "Option-A3" },
        ],
      },
      {
        id: "set-b",
        options: [
          { id: "Option-B2", title: "Other Option B" },
          { id: "Option-b3" },
        ],
      },
    ],
    icon: "redirect",
    title: "Test title",
    // disable: false,
  } as ConditionalToolbarSelectorParameter,
};
