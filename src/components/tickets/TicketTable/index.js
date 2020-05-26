import React, { useContext } from 'react';
import './TicketTable.scss';

import TicketTableHeader from './TicketTableHeader';
import TicketTableRow from './TicketTableRow';
import TicketsContext from '../../../contexts/TicketsContext';

const TicketTable = () => {
  const { tickets, selectTicket, selectedTicket } = useContext(TicketsContext);

  return (
    <div className="ticket-table">
      <div className="ticket-table__body">
        <TicketTableHeader />
        {tickets.map(ticket => (
          <TicketTableRow
            key={ticket.ticketId}
            ticket={ticket}
            active={selectedTicket && (selectedTicket.ticketId === ticket.ticketId)}
            onSelect={selectTicket}
          />
        ))}
      </div>
    </div>
  );
}

export default TicketTable;
