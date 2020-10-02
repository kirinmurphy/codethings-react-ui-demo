import React, { useState } from 'react';

import { Popupizer } from 'codethings-react-ui';

import { Widget } from './Widget.js';

export function DemoPopup () {

  const [demoPopupActive, setDemoPopupActive]= useState(false);

  return (
    <Widget name="Popupizer">
      <button onClick={() => setDemoPopupActive(true)}>Open popup</button>
      {demoPopupActive && <Popupizer 
        children={<div>Welcome to this popup!</div>}
        closeAction={() => setDemoPopupActive(false)}
      />}
    </Widget>
  );
}
