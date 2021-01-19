import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { PARAM_KEY } from "../../src/constants";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    [PARAM_KEY]: { setToUse: "set-a" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};
Large.parameters = {
  [PARAM_KEY]: { disable: true },
  myAddon: { disable: true },
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
Small.parameters = {
  [PARAM_KEY]: { setToUse: "set-b", default: "Option-B2" },
};

export const InvalidSet = Template.bind({});
InvalidSet.args = {
  size: "small",
  label: "Not Set",
};
InvalidSet.parameters = {
  [PARAM_KEY]: { setToUse: "set-x", default: "Option-B2" },
};

export const NotSet = Template.bind({});
NotSet.args = {
  size: "small",
  label: "Not Set",
};
NotSet.parameters = {
  [PARAM_KEY]: {},
};
