import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { loadTickets, selectTicket, changeSearchQuery } from '../../redux/reducers/ticket';
import { TicketDetail, TicketList } from '../../components';
import { TicketsContextProvider } from '../../contexts/TicketsContext';
import {
  getFilteredTickets,
  getSelectedTicket
} from '../../selectors';
import './Tickets.scss';

const Tickets = ({
  loadTickets,
  selectTicket,
  changeSearchQuery
}) => {
  const tickets = useSelector(getFilteredTickets);
  const selectedTicket = useSelector(getSelectedTicket);

  useEffect(() => {
    loadTickets()
  }, []);

  return (
    <TicketsContextProvider
      value={{
        tickets,
        selectTicket,
        selectedTicket,
        changeSearchQuery
      }}
    >
      <div className="tickets page-container">
        <div className="tickets__list-wrapper">
          <TicketList />
        </div>
        <div className="tickets__detail-wrapper">
          <TicketDetail ticket={selectedTicket} />
        </div>
      </div>
    </TicketsContextProvider>
  );
}

Tickets.defaultProps = {
  loadTickets: () => {},
  selectTicket: () => {},
  changeSearchQuery: () => {}
};
Tickets.propTypes = {
  loadTickets: PropTypes.func,
  selectTicket: PropTypes.func,
  changeSearchQuery: PropTypes.func
};

const mapDispatchToProps = {
  loadTickets,
  selectTicket,
  changeSearchQuery
};

export default connect(null, mapDispatchToProps)(Tickets);
