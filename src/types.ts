import type { IconsProps } from '@storybook/components';

/** Definition of a dropdown item */
export type DropdownOption = {
  /** id of the theme - available for decorators to apply the theme */
  id: string;
  /** Display title for toolbar - if not set the `id` is shown */
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

/** Dropdown definition */
export type DropdownSet = {
  id: string;

  icon?: string; // TODO: implement

  /** List of themes that belong to the this `ThemeSet` */
  options?: DropdownOption[];
};

/** Parameter-type to be provided in global Parameters in preview  */
export type ConditionalToolbarSelectorParameter = {
  /** Title for the toolbar icon */
  title?: string;
  /** defaults to `switchalt`, all options: https://next--storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels */
  icon?: IconsProps['icon'];
  /** Sets of dropdown options */
  sets: DropdownSet[];
  /** Default set to use `null | undefined` do disable theme selection if not explicitly set */
  default?: string | null;
  /** if nothing is selected the first option is auto-selected - defaults to `true` */
  autoSelectFirstOption?: boolean;
  /** If `true` toolbar item is disabled (hidden) */
  disable?: boolean;
};

/** Parameter-type to be provided by Story */
type StoryParameterOnly = {
  /** Set to pick the theme from */
  setToUse?: string | null;
  /** default option to select */
  defaultOption?: string | null;
};

export type RuntimeSettings = Required<ConditionalToolbarSelectorParameter> &
  StoryParameterOnly;

export type CustomConditionalToolbarStoryParameter = Partial<ConditionalToolbarSelectorParameter> &
  StoryParameterOnly;
