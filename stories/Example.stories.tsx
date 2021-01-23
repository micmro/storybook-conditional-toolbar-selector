import React from "react";
import { Story, Meta } from "@storybook/react";

import { SomeComponent, SomeComponentProps } from "./Example";
import { RuntimeSettings } from "../src/types";
// import { RuntimeSettings } from "storybook-conditional-toolbar-selector" in exported version

export default {
  title: "Example",
  component: SomeComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    customConditionalToolbar: { setToUse: "set-a" },
  },
} as Meta;

const Template: Story<SomeComponentProps> = (args) => (
  <SomeComponent {...args} />
);

export const NoParameterSet = Template.bind({});
NoParameterSet.args = {
  label: "No Parameter Set / Defaulting to Set A",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
};
Disabled.parameters = {
  customConditionalToolbar: { disable: true } as RuntimeSettings,
};

export const UsingSetA = Template.bind({});
UsingSetA.args = {
  label: "Using Set A / no default set",
};
UsingSetA.parameters = {
  customConditionalToolbar: {
    setToUse: "set-a",
    disable: false,
  } as RuntimeSettings,
};

export const UsingSetB = Template.bind({});
UsingSetB.args = {
  label: "Using Set B / default to option b2",
};
UsingSetB.parameters = {
  customConditionalToolbar: {
    setToUse: "set-b",
    defaultOption: "b2",
  } as RuntimeSettings,
};

export const InvalidSet = Template.bind({});
InvalidSet.args = {
  label: "Invalid Set selected / see error in the console",
};
InvalidSet.parameters = {
  customConditionalToolbar: {
    setToUse: "set-x",
    defaultOption: "x1",
  } as RuntimeSettings,
};

export const NotSet = Template.bind({});
NotSet.args = {
  label: "Not Set / Defaulting to Set A",
};
NotSet.parameters = {
  customConditionalToolbar: {} as RuntimeSettings,
};
