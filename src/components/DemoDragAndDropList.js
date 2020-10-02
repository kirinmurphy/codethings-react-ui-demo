import React from 'react';
import { 
  DragAndDropList, 
  CenterTextEllipticizer 
} from 'codethings-react-ui';

import { dummyData } from '../utils/widgetDummyData.js';

import { Widget } from './Widget.js';

export function DemoDragAndDropList () {
  return (
    <>
      <Widget name="DragAndDropList">
        <DragAndDropList
          collection={dummyData.sortableListCollection}
          onAfterReorder={newCollection => { 
            alert('after the list is re-ordered, the onAfterReorder callback exposes the updated collection');
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
    </>
  );
}
