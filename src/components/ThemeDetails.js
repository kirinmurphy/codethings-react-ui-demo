import React, { useEffect, useState } from 'react';

import { LoadingIcon, Markdownizer } from 'codethings-react-ui';

import cssScaffoldingPath from './cssScaffolding.md';
import hooksScaffoldingPath from './hooksScaffoldingPath.md';

export function ThemeDetails () {
  const [cssDetails, setCssDetails] = useState(null);
  const [hooksDetails, setHooksDetails] = useState(null);

  useEffect(() => {
    fetch(cssScaffoldingPath)
      .then(res => res.text())
      .then(text => setCssDetails(text));

    fetch(hooksScaffoldingPath)
      .then(res => res.text())
      .then(text => setHooksDetails(text));
  }, []);

  return (
    <>
      <section className="markdown-section">
        <header>
          <h2>custom hooks</h2>
          <a href="https://github.com/kirinmurphy/codethings-react-ui/blob/master/README.md#custom-hooks">docs</a>          
        </header>
        {!cssDetails && <LoadingIcon />}
        <Markdownizer source={hooksDetails} />
      </section>

      <section className="markdown-section">
        <header>
          <h2>starter css</h2>
          <a href="https://github.com/kirinmurphy/codethings-react-ui/blob/master/README.md#theme-defaults">docs</a>          
        </header>
        {!cssDetails && <LoadingIcon />}
        <Markdownizer source={cssDetails} />
      </section>
      
    </>
  );
}
