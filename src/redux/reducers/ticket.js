import { createAction, handleActions } from 'redux-actions';

export const actionTypes = {
  loadTicketsRequest: 'ticket/load_tickets_request',
  loadTicketsSucceed: 'ticket/load_tickets_succeed',
  loadTicketsFail: 'ticket/load_tickets_fail',
  changeSearchQuery: 'ticket/change_search_query',
  selectTicket: 'ticket/select_ticket',
  setLoadingStatus: 'ticket/set_loading_status',
};

export const loadTickets = createAction(actionTypes.loadTicketsRequest);
export const selectTicket = createAction(actionTypes.selectTicket);
export const changeSearchQuery = createAction(actionTypes.changeSearchQuery);

const defaultState = {
  isLoading: false,
  tickets: [],
  selectedId: null,
  searchQuery: '',
};

export default handleActions(
  {
    [actionTypes.changeSearchQuery]: (state, { payload }) => ({
      ...state,
      searchQuery: payload,
    }),
    [actionTypes.selectTicket]: (state, { payload }) => ({
      ...state,
      selectedId: payload,
    }),
    [actionTypes.loadTicketsSucceed]: (
      state,
      { payload }
    ) => ({
      ...state,
      tickets: payload,
    }),
    [actionTypes.setLoadingStatus]: (
      state,
      { payload }
    ) => ({ ...state, isLoading: payload }),
  },
  defaultState
);
