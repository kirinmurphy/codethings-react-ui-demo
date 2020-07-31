import React from 'react';

export function Widget ({ name, children }) {
  return (
    <section class="widget">
      <header class="widget__header">
        <h3>&lt;{name} /&gt;</h3>
      </header>
      <div className="widget__example">
        {children}
      </div>
    </section>
  );
}
