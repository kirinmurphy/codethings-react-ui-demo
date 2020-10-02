import React from 'react';

export function Widget ({ name, children }) {
  return (
    <div className="widget" data-widget-name={name}>
      <header className="widget__header">
        <h3>&lt;{name}&nbsp;/&gt;</h3>
      </header>
      <div className="widget__example">
        {children}
      </div>
    </div>
  );
}
