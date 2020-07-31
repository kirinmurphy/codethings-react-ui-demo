import React, { useState } from 'react';
import 'codethings-react-ui/dist/styles.css';
import './App.css';

import { dummyData } from './utils/widgetDummyData.js';
import { Widget } from './components/Widget.js';

import { 
  Ellipticizer, 
  Markdownizer, 
  CommaSeparatedList, 
  Dropdownizer,
  LoadingIcon,
  Popupizer,
  Multimediaizer,
  getFormattedChapters,
  BackLink
} from 'codethings-react-ui';

function App() {
  const [demoPopupActive, setDemoPopupActive]= useState(false);

  const dropdownItems = dummyData.dropdownItems
    .map((item, index) => ( 
      <div key={index} 
        data-is-active={item.isActive} 
        className="dropdown-item">{item.name}</div>
    ));
  
  return (
    <div className="widgets">
      <Widget name="LoadingIcon">
        <LoadingIcon />
      </Widget>

      <Widget name="Ellipticizer" >
        <Ellipticizer width="240px">
          {dummyData.messageTooLongForSpace}
        </Ellipticizer>
      </Widget>

      <Widget name="BackLink">
        <BackLink />
      </Widget>

      <Widget name="Markdownizer">
        <Markdownizer source={dummyData.markdownSource} />
      </Widget>

      <Widget name="CommaSeparatedList">
        <CommaSeparatedList name="title" collection={dummyData.commaSeparatedList} />         
      </Widget>

      <Widget name="Dropdownizer">
        <div className="variation">
          <Dropdownizer
            title="Open Dropdown Below (defaut)"
            content={dropdownItems} 
          />
        </div>
        <div className="variation">
          <Dropdownizer
            title="Open Dropdown Above"
            content={dropdownItems}
            orientation={"above"}
          />
        </div>
      </Widget>

      <Widget name="Popupizer">
        <button onClick={() => setDemoPopupActive(true)}>Open popup</button>
        {demoPopupActive && <Popupizer 
          children={<div>hello</div>}
          closeAction={() => setDemoPopupActive(false)}
        />}
      </Widget>

      <Widget name="Multimediaizer type=&quot;iframe&quot;">
        <div className="multimedia-option">
          <Multimediaizer
            type="iframe"
            iframeUrl={dummyData.iframeUrl}
          />
        </div>
      </Widget>

      <Widget name="Multimediaizer type=&quot;video&quot;">
        <div className="multimedia-option multimedia-option-video">
          <Multimediaizer
            type="video"
            video={{
              sources: [
                { src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_30MB.mp4', type: 'video/mp4' }
              ],
              chapters: getFormattedChapters([
                { startTime: '0:00', title: 'Chapter 1' },
                { startTime: '0:05', title: 'Chapter 2' }
              ])
            }}
          />          
        </div>
      </Widget>

      <Widget name="Multimediaizer type=&quot;slideshow&quot;">
        <div className="multimedia-option">
          <Multimediaizer
            type="slideshow"
            images={dummyData.slideshowImages}
          />
        </div>
      </Widget>
    </div>
  );
}

export default App;
