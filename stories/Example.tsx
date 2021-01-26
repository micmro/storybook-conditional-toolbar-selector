import React from 'react';
import styled from 'styled-components';

/** Dummy Styled component */
const Strong = styled.strong`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

Strong.defaultProps = {
  theme: {
    main: 'dimgray',
  },
};

export interface SomeComponentProps {
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const SomeComponent: React.FC<SomeComponentProps> = ({ label }) => (
  <Strong>{label}</Strong>
);
