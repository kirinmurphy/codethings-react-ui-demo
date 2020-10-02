import React from 'react';
import 'codethings-react-ui/dist/styles.css';
import './App.css';

import { WidgetList } from './components/WidgetList';
import { ThemeDetails } from './components/ThemeDetails';

function App() {
  return (
    <>
      <main>
        <section className="intro">
          <header>
            <h1>codethings-react-ui library</h1>
          </header>

          <a href="https://www.npmjs.com/package/codethings-react-ui">npm library</a> |&nbsp;
          <a href="https://github.com/kirinmurphy/codethings-react-ui/">github repo</a>
        </section>

        <WidgetList />
        <ThemeDetails />
      </main>
    </>
  );
}

export default App;
