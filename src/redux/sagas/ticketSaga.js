
import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../reducers/ticket';
import { fetchTickets } from '../../service/ticket';

function* fetchTicketsSaga() {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const tickets = yield call(fetchTickets);
    yield put({
      type: actionTypes.loadTicketsSucceed,
      payload: tickets,
    });
  } catch(err) {
    console.log('[Error in loading tickets]', err);
    yield put({ type: actionTypes.loadTicketsFail });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

export function* watchTickets() {
  yield takeLatest(actionTypes.loadTicketsRequest, fetchTicketsSaga);
}
