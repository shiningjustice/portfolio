// Frameworks
import React from 'react';
// Helpers
import cx from 'classnames';
// Styles
import './Button.css';

const Button = React.forwardRef(({ className, href, ...props }, ref) => {
  // Text buttons are formatted differently from symbol buttons, even if they just are "button" links
  const typeOfChild = typeof props.children;
  if (href && typeOfChild === "string") {
    return (
      <a href={href} className={cx('Button text Button__link bold', className)} rel="noopener noreferrer" {...props} />
    )
  } else if (typeOfChild === "string") {
    return (
      <button className={cx('Button text bold', className)} ref={ref} {...props} />
    )
  } else {
    return (
      <a href={href} className={cx('Button Button__link bold', className)} rel="noopener noreferrer" {...props} />
    )
  }
});

export default Button;