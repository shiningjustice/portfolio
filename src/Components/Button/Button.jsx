// Frameworks
import React from 'react';
// Helpers
import cx from 'classnames';
// Styles
import './Button.css';

const Button = React.forwardRef(({ className, href, ariaLabel, children }, ref) => {
  // Text buttons are formatted differently from symbol buttons, even if they just are "button" links
  const typeOfChild = typeof children;
  if (href && typeOfChild === "string") {
    return (
      <a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"  
        className={cx(`Button text Button__link bold`, className)} 
      >
        {children}
      </a>
    )
  } else if (href) {
    return (
      <a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer" 
        aria-label={ariaLabel}
        className={cx(`Button ${typeOfChild === "string" && "text"} Button__link bold`, className)} 
      >
        {children}
      </a>

    )
  } else {
    return (
      <button className={cx(`Button text ${typeOfChild === "string" && "text"} bold`, className)} ref={ref}>{children}</button>
    )
  } 
});

export default Button;