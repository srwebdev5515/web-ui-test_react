import React from 'react';
import { TicketStatusLabels } from '../../../util/helper';

const TicketTableRow = ({ active, ticket, onSelect }) => {
  const handleSelect = () => {
    const { ticketId } = ticket;
    onSelect(ticketId);
  };

  return (
    <div className={'ticket-table__row' + (active ? ' active' : '')} onClick={handleSelect}>
      <div className="ticket-table__row__owner">
        <img src={ticket.owner.avatar} alt="" />
      </div>
      <div className="ticket-table__row__reported">
        {new Date(ticket.reportedTime).toLocaleDateString()}
      </div>
      <div className="ticket-table__row__asset">
        {ticket.asset.name}
      </div>
      <div className="ticket-table__row__status">
        <span className={'box ticket-status ticket-status__' + ticket.status}>
          {TicketStatusLabels[ticket.status]}
        </span>
      </div>
    </div>
  );
}

export default TicketTableRow;
