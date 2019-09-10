import React from 'react';

interface ColorButtonProps {
  /** Buttons background color
   * @default orange
   */
  color?: Colors;
}

export type Colors = 'blue' | 'green' | 'orange';

/** A button with a configurable background color. */
export const ColorButton: React.SFC<ColorButtonProps> = ({
  color = 'orange',
  children,
  ...otherProps
}): React.ReactElement => {
  return (
    <button
      type="button"
      style={{
        padding: 40,
        color: '#eee',
        backgroundColor: color,
        fontSize: '2rem',
      }}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ColorButton;
