// Frameworks
import React from 'react';
// Helpers
import cx from 'classnames';
// Styles
import './Button.css';

const Button = React.forwardRef(({ className, href, ariaLabel, ...props }, ref) => {
  // Text buttons are formatted differently from symbol buttons, even if they just are "button" links
  const typeOfChild = typeof props.children;
  if (href && typeOfChild === "string") {
    return (
      <a 
        href={href} 
        className={cx(`Button text Button__link bold`, className)} 
        rel="noopener noreferrer" 
        {...props} />
    )
  } else if (href) {
    return (
      <a 
        href={href} 
        aria-label={ariaLabel}
        className={cx(`Button ${typeOfChild === "string" && "text"} Button__link bold`, className)} 
        rel="noopener noreferrer" 
        {...props} />
    )
  } else {
    return (
      <button className={cx(`Button text ${typeOfChild === "string" && "text"} bold`, className)} ref={ref} {...props} />
    )
  } 
});

export default Button;