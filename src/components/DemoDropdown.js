import React from 'react';
import { Dropdownizer } from 'codethings-react-ui';

import { dummyData } from '../utils/widgetDummyData.js';

import { Widget } from './Widget.js';

export function DemoDropdown () {
  const dropdownItems = dummyData.dropdownItems
    .map((item, index) => ( 
      <div key={index} 
        data-is-active={item.isActive} 
        className="dropdown-item">{item.name}</div>
    ));

  return (
    <Widget name="Dropdownizer">
      <div className="variation dropdown-example">
        <Dropdownizer
          title="Dropdown Below (defaut)"
          content={dropdownItems} 
        />
      </div>
      <div className="variation dropdown-example">
        <Dropdownizer
          title="Dropdown Above"
          content={dropdownItems}
          orientation={"above"}
        />
      </div>
    </Widget>
  );
}