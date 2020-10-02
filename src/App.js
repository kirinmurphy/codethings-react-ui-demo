import React, { useState } from 'react';
import 'codethings-react-ui/dist/styles.css';
import './App.css';

import { dummyData } from './utils/widgetDummyData.js';
import { Widget } from './components/Widget.js';

import cssScaffoldingDetails from './cssScaffoldingDetails.md';

import { 
  Ellipticizer,
  Markdownizer, 
  CommaSeparatedList, 
  Dropdownizer,
  LoadingIcon,
  Popupizer,
  Multimediaizer,
  BrowserBackLink,
  CenterTextEllipticizer,
  DragAndDropList
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
    <>
      <main>
        <div className="intro">
          <header>
            <h1>codethings-react-ui library</h1>
          </header>

          <a href="https://www.npmjs.com/package/codethings-react-ui">NPM Library</a> |&nbsp;
          <a href="https://github.com/kirinmurphy/codethings-react-ui/">Github repo</a> |&nbsp; 
          <a href="https://github.com/kirinmurphy/codethings-react-ui/blob/master/src/widgets/README.md">Code examples</a>
        </div>

        <section className="widgets">
          <header>
            <h2>widgets</h2>
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
            <CenterTextEllipticizer rawText={dummyData.messageWaaaayTooLongForSpace}/>
          </Widget>

          <Widget name="Markdownizer">
            <Markdownizer source={dummyData.markdownSource} />
          </Widget>

          <Widget name="CommaSeparatedList">
            <CommaSeparatedList name="Optional title" collection={dummyData.commaSeparatedList} />         
          </Widget>

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

          <Widget name="Popupizer">
            <button onClick={() => setDemoPopupActive(true)}>Open popup</button>
            {demoPopupActive && <Popupizer 
              children={<div>Welcome to this popup!</div>}
              closeAction={() => setDemoPopupActive(false)}
            />}
          </Widget>

          <Widget name="DragAndDropList">
            <DragAndDropList
              collection={dummyData.sortableListCollection}
              onAfterReSort={newCollection => { 
                alert('re-sorted!  afterwards, the onAfterResort callback exposes the updated collecton');
                console.log('resorted items: ', newCollection);
              }}
              itemTemplate={(index, listItem) => (
                <div style={{ display:"flex", width:"100%" }}>
                  <span style={{ width:"2rem" }}>{index+1}.</span>
                  <span style={{ width:"calc(100% - 4.5rem" }}>
                    <CenterTextEllipticizer rawText={listItem} />
                  </span>
                </div>
              )}
            />
          </Widget>

          <Widget name="Multimediaizer type=&quot;iframe&quot;">
            <div className="variation multimedia-example">
              <Multimediaizer
                type="iframe"
                iframeUrl={dummyData.iframeUrl}
              />
            </div>
          </Widget>

          <Widget name="Multimediaizer type=&quot;video&quot;">
            <div className="variation multimedia-example">
              <Multimediaizer
                type="video"
                video={dummyData.videoConfig}
              />          
            </div>
          </Widget>

          <Widget name="Multimediaizer type=&quot;slideshow&quot;">
            <div className="variation multimedia-example">
              <Multimediaizer
                type="slideshow"
                slideshow={{
                  images: dummyData.slideshowImages,
                  autoAdvanceDelay: 4000
                }}
              />
            </div>
          </Widget>
        </section>

        <section class="css template">
          <header>
            <h2>
              css defaults
            </h2>
          </header>
          
          <Markdownizer source={cssScaffoldingDetails} />
        </section>
      </main>

    </>
  );
}

export default App;
