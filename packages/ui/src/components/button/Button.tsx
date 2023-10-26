export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Is the button warn of something?
   */
  warning?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  disabled = false,
  warning = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : warning ? 'storybook-button--warning' : 'storybook-button--secondary';
  const isDisabled = disabled ? 'storybook-button--disabled' : '';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, isDisabled].join(' ')}
      style={{ backgroundColor }}
      onClick={props.onClick}
      {...props}
    >
      {label}
    </button>
  );
};