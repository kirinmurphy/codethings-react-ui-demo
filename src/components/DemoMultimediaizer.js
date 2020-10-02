import React from 'react';
import { Multimediaizer } from 'codethings-react-ui';

import { dummyData } from '../utils/widgetDummyData.js';

import { Widget } from './Widget.js';

export function DemoMultimediaizer () {
  return (
    <>
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

      <Widget name="Multimediaizer type=&quot;iframe&quot;">
        <div className="variation multimedia-example">
          <Multimediaizer
            type="iframe"
            iframeUrl={dummyData.iframeUrl}
          />
        </div>
      </Widget>
    </>
  );
}
