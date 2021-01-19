import React from "react";
import { Story, Meta } from "@storybook/react";

import { SomeComponent, SomeComponentProps } from "./Example";

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
  customConditionalToolbar: { disable: true },
};

export const UsingSetA = Template.bind({});
UsingSetA.args = {
  label: "Using Set A / no default set",
};
UsingSetA.parameters = {
  customConditionalToolbar: { setToUse: "set-a", disable: false },
};

export const UsingSetB = Template.bind({});
UsingSetB.args = {
  label: "Using Set B / default to option b2",
};
UsingSetB.parameters = {
  customConditionalToolbar: { setToUse: "set-b", defaultOption: "b2" },
};

export const InvalidSet = Template.bind({});
InvalidSet.args = {
  label: "Invalid Set selected / see error in the console",
};
InvalidSet.parameters = {
  customConditionalToolbar: { setToUse: "set-x", defaultOption: "x1" },
};

export const NotSet = Template.bind({});
NotSet.args = {
  label: "Not Set / Defaulting to Set A",
};
NotSet.parameters = {
  customConditionalToolbar: {},
};
