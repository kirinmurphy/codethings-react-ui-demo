import React, { useEffect, useState } from 'react';

import { LoadingIcon, Markdownizer } from 'codethings-react-ui';

import cssScaffoldingPath from './cssScaffolding.md';

export function ThemeDetails () {
  const [cssDetails, setCssDetails] = useState(null);

  useEffect(() => {
    fetch(cssScaffoldingPath)
      .then(res => res.text())
      .then(text => setCssDetails(text));
  }, []);

  return (
    <section className="starter-css">
      <header>
        <h2>starter css</h2>
        <a href="https://github.com/kirinmurphy/codethings-react-ui/blob/master/README.md">full documentation</a>          
      </header>
      {!cssDetails && <LoadingIcon />}
      <Markdownizer source={cssDetails} />
    </section>
  );
}
