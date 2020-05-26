import { all } from 'redux-saga/effects';
import { watchTickets } from './ticketSaga';

export default function* rootSaga() {
  yield all([watchTickets()]);
}
