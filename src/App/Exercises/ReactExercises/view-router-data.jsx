import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Events/router-data';
import { hitTheMoleMetaData } from './HitTheMole/router-data';
import { memoMetaData } from './Memo/router-data';
import { todowithserverMetaData } from './ToDoWithServer/router-data';
import { todowithservermentorMetaData } from './ToDoWithServerMentor/router-data';
import { reactfirebaseMetaData } from './ReactFirebase/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  hitTheMoleMetaData,
  memoMetaData,
  todowithserverMetaData,
  todowithservermentorMetaData,
  reactfirebaseMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
