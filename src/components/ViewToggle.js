import React from 'react';

const ViewToggle = ({ className, visible, children }) => (
  <div className={`view-toggle view-toggle--${visible ? 'visible' : 'hidden'} ${className}`}>
    {children}
  </div>
);

export default ViewToggle;