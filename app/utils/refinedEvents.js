import events from './events';
import investors from './investors';

export default events.map(event => {
  const id = event.id;
  const eventInvestors = investors.filter(investor => investor.events && investor.events.some(eventId => eventId === id));
  return Object.assign({}, event, { eventInvestors });
});
