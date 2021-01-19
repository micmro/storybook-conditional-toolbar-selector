import React from "react";

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
  <strong>{label}</strong>
);
