import React from 'react';

export function Widget ({ name, children }) {
  return (
    <section className="widget">
      <header className="widget__header">
        <h3>&lt;{name}&nbsp;/&gt;</h3>
      </header>
      <div className="widget__example">
        {children}
      </div>
    </section>
  );
}
