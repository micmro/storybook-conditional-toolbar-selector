import type { RuntimeSettings } from "./types";

export const ADDON_ID = "conditional-toolbar-selector";
export const PARAM_KEY = "customConditionalToolbar";

export const DEFAULT_CONFIG: RuntimeSettings = {
  title: "",
  icon: "switchalt",
  autoSelectFirstOption: true,
  default: null,
  disable: false,
  sets: [],
  setToUse: null,
};
