import React from 'react';
import PropTypes from 'prop-types';
import './TicketDetail.scss';

import TicketEmpty from '../TicketEmpty';
import TicketOwner from '../TicketOwner';
import TicketDetails from '../TicketDetails';
import TicketAsset from '../TicketAsset';

const TicketDetail = ({ ticket }) => (
  <div className="ticket-detail">
    {!ticket
      ? (<TicketEmpty />)
      : (
        <>
          <div className="ticket-detail__header">
            <div className="ticket-detail__header__number-wrapper">
              <label>TICKET NO.</label>
              {ticket.number}
            </div>
            <label className="ticket-detail__header__date-updated-wrapper">
              LAST UPDATED {new Date(ticket.lastUpdatedTime).toLocaleString()}
            </label>
          </div>
          <TicketOwner ticket={ticket} />
          <TicketDetails ticket={ticket} />
          <TicketAsset ticket={ticket} />
        </>
      )
    }
  </div>
);

TicketDetail.defaultProps = {
  ticket: null
};
TicketDetail.propTypes = {
  ticket: PropTypes.object
};

export default TicketDetail;
