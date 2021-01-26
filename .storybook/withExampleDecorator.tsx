import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StoryWrapper, StoryContext } from '@storybook/addons';

/** helper to get the active set options id */
const getActiveValue = ({ globals, parameters }: StoryContext): string => {
  const global = globals.customConditionalToolbar || {};
  const param = parameters.customConditionalToolbar;

  return (
    global[param.setToUse] || // get the selected options id
    param.defaultOption || // get the story set default if no option has been selected
    param.sets.find((s) => s.id === param.setToUse).options[0].id // default to the first option
  );
};

/** Dummy helper to pick a mock-theme */
const getTheme = (activeValue: string) => {
  switch (activeValue) {
    case 'a1':
      return { main: 'darkorchid' };
    case 'a2':
      return { main: 'mediumblue' };
    case 'b1':
      return { main: 'darkgreen' };
    case 'b2':
      return { main: 'sienna' };
    default:
      return { main: 'crimson' };
  }
};

/** Dummy decorator to exemplify how storybook-conditional-toolbar-selector could be used */
export const withExampleDecorator: StoryWrapper = (getStory, context) => {
  const theme = getTheme(getActiveValue(context));
  return <ThemeProvider theme={theme}>{getStory(context)}</ThemeProvider>;
};
