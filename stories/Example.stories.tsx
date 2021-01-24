import React from "react";
import { Story, Meta } from "@storybook/react";

import { SomeComponent, SomeComponentProps } from "./Example";
import { CustomConditionalToolbarStoryParameter } from "../src/types";
// when consuming the published version you can get the `CustomConditionalToolbarStoryParameter` types above via:
// import { CustomConditionalToolbarStoryParameter } from "storybook-conditional-toolbar-selector"

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

const Template: Story<SomeComponentProps> = (args, context) => {
  console.log(context.parameters.customConditionalToolbar); // can be used in decorator etc
  return <SomeComponent {...args} />;
};

export const NoParameterSet = Template.bind({});
NoParameterSet.args = {
  label: "No Parameter Set / Defaulting to Set A",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
};
Disabled.parameters = {
  customConditionalToolbar: {
    disable: true,
  } as CustomConditionalToolbarStoryParameter,
};

export const UsingSetA = Template.bind({});
UsingSetA.args = {
  label: "Using Set A / no default set",
};
UsingSetA.parameters = {
  customConditionalToolbar: {
    setToUse: "set-a",
    disable: false,
  } as CustomConditionalToolbarStoryParameter,
};

export const UsingSetB = Template.bind({});
UsingSetB.args = {
  label: "Using Set B / default to option b2",
};
UsingSetB.parameters = {
  customConditionalToolbar: {
    setToUse: "set-b",
    defaultOption: "b2",
  } as CustomConditionalToolbarStoryParameter,
};

export const InvalidSet = Template.bind({});
InvalidSet.args = {
  label: "Invalid Set selected / see error in the console",
};
InvalidSet.parameters = {
  customConditionalToolbar: {
    setToUse: "set-x",
    defaultOption: "x1",
  } as CustomConditionalToolbarStoryParameter,
};

export const NotSet = Template.bind({});
NotSet.args = {
  label: "Not Set / Defaulting to Set A",
};
NotSet.parameters = {
  customConditionalToolbar: {} as CustomConditionalToolbarStoryParameter,
};

export const StorySpecificSet = Template.bind({});
StorySpecificSet.args = {
  label: "Story specific set - overwrites preview settings",
};
StorySpecificSet.parameters = {
  customConditionalToolbar: {
    setToUse: "story-specific--set",
    sets: [
      {
        id: "story-specific--set",
        options: [{ id: "story-option-1" }, { id: "story-option-2" }],
      },
    ],
    defaultOption: "story-option-2",
  } as CustomConditionalToolbarStoryParameter,
};
