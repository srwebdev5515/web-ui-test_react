import { createSelector } from 'reselect';

export const getTickets = state => state.ticket.tickets;
export const getSelectedTicketId = state => state.ticket.selectedId;
export const getTicketsSearchQuery = state => state.ticket.searchQuery;

export const getSelectedTicket = createSelector(
  getTickets,
  getSelectedTicketId,
  (tickets, selectedId) => tickets.find(({ ticketId }) => ticketId === selectedId) || null
);

export const getFilteredTickets = createSelector(
  getTickets,
  getTicketsSearchQuery,
  (tickets, searchQuery) =>
    tickets.filter(
      ({ status }) =>
        status
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
    ) || []
);
