import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'primary' | 'secondary';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  /**
   * Custom className
   */
  className?: string;
}

const cx = classNames.bind(styles);

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  label = 'Button',
  style,
  className,
  ...props
}: ButtonProps) => {
  const classes = cx(
    'button',
    [`button--${size}`],
    [`button--${variant}`],
    className,
  );

  return (
    <button type='button' className={classes} style={style} {...props}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  label: 'Button',
  style: undefined,
  className: undefined,
};
