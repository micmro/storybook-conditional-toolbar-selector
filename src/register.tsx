import * as React from "react";
import addons, { types } from "@storybook/addons";

import { ADDON_ID, PARAM_KEY } from "./constants";

import { Selector } from "./containers/Selector";

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: "Custom Toolbar Selector",
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === "story",
    render: () => <Selector />,
    paramKey: PARAM_KEY,
  });
});
