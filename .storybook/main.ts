module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['../src/preset'], // addon registered via local path - would be "storybook-conditional-toolbar-selector" when consuming the published version
};
