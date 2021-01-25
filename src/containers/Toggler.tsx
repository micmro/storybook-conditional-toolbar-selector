import React from 'react';
import { Icons, IconButton } from '@storybook/components';

import type { RuntimeSettings } from '../types';

export const Toggler: React.FC<{
  active: boolean;
  disabled?: boolean;
  icon?: RuntimeSettings['icon'];
  title?: string;
}> = ({
  active,
  disabled = false,
  title = 'Select an option',
  icon = 'switchalt',
}) => (
  <IconButton
    disabled={disabled}
    key="conditional-toolbar-selector"
    title={title}
    active={active}
  >
    <Icons icon={icon} />
  </IconButton>
);
