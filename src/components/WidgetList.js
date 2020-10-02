import React from 'react';

import { Widget } from './Widget.js';
import { dummyData } from '../utils/widgetDummyData.js';

import { 
  Ellipticizer,
  Markdownizer, 
  CommaSeparatedList, 
  LoadingIcon,
  BrowserBackLink,
  CenterTextEllipticizer,
} from 'codethings-react-ui';

import { DemoDropdown } from './DemoDropdown.js';
import { DemoPopup } from './DemoPopup.js';
import { DemoMultimediaizer } from './DemoMultimediaizer';
import { DemoDragAndDropList } from './DemoDragAndDropList.js';

export function WidgetList () {
  return (
    <section className="widgets">
      <header>
        <h2>widgets</h2>
        <a href="https://github.com/kirinmurphy/codethings-react-ui/blob/master/src/widgets/README.md">code examples</a>
      </header>

      <Widget name="LoadingIcon">
        <LoadingIcon />
      </Widget>

      <Widget name="BrowserBackLink">
        <BrowserBackLink />
      </Widget>

      <Widget name="Ellipticizer" >
        <Ellipticizer width="240px">
          {dummyData.messageTooLongForSpace}
        </Ellipticizer>
      </Widget>

      <Widget name="CenterTextEllipticizer" >
        <CenterTextEllipticizer rawText={dummyData.messageWayTooLongForSpace}/>
      </Widget>

      <Widget name="Markdownizer">
        <Markdownizer source={dummyData.markdownSource} />
      </Widget>

      <Widget name="CommaSeparatedList">
        <CommaSeparatedList name="Optional title" collection={dummyData.commaSeparatedList} />         
      </Widget>

      <DemoPopup />
      <DemoDropdown />
      <DemoDragAndDropList />
      <DemoMultimediaizer />
    </section>
  );
}
