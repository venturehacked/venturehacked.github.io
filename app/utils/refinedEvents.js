import events from './events';
import investors from './investors';
import keynote from './keynote';
import moderator from './moderator';
import extendedPanel from './extended-panel';
import moderator2 from './extended-panel-moderator';

export function filterType(collection, id) {
  return collection.filter(item => item.events && item.events.some(eventId => eventId === id));
}

export default events.map(event => {
  const eventInvestors = filterType(investors, event.id);
  const eventKeynote   = filterType(keynote, event.id)[0];
  const eventModerator = filterType(moderator, event.id)[0];
  const eventExtendedPanel = filterType(extendedPanel, event.id)[0];
  const eventModerator2 = filterType(moderator2, event.id)[0];
  return Object.assign({}, event, { eventInvestors, eventKeynote, eventModerator, eventExtendedPanel, eventModerator2 });
});
