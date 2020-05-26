import { combineReducers } from 'redux';
import ticketReducer from './ticket';

const rootReducer = combineReducers({
  ticket: ticketReducer,
});

export default rootReducer;
