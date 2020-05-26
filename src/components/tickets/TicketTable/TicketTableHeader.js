import React from 'react';

const TicketTableHeader = () => {
  return (
    <div className="ticket-table__header">
      <div className="ticket-table__row">
        <div className="ticket-table__row__owner">OWNER</div>
        <div className="ticket-table__row__reported">REPORTED</div>
        <div className="ticket-table__row__asset">ASSET</div>
        <div className="ticket-table__row__status">STATUS</div>
      </div>
    </div>
  );
}

export default TicketTableHeader;
