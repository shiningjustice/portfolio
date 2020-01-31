// Frameworks
import React from 'react';
// Helpers
import cx from 'classnames';
// Styles
import './Button.css';

const Button = React.forwardRef(({ className, href, ariaLabel, children, title }, ref) => {
  // Text buttons are formatted differently from symbol buttons, even if they just are "button" links
  const typeOfChild = typeof children;
  // if is a string with an anchor
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
  } // if is a symbol with an anchor
  else if (href) {
    return (
      <a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer" 
        title={title}
        aria-label={ariaLabel}
        className={cx(`Button ${typeOfChild === "string" && "text"} Button__link bold`, className)} 
      >
        {children}
      </a>

    )
  } // if is an actual button, string or not
  else {
    return (
      <button className={cx(`Button text ${typeOfChild === "string" && "text"} bold`, className)} ref={ref}>{children}</button>
    )
  } 
});

export default Button;