import React from 'react';
import Card from '../../common/Card';
import PropTypes from 'prop-types';
import { TicketStatusLabels } from '../../../util/helper';

import './TicketDetails.scss';

const TicketDetails = ({ ticket }) => {
  return (
    <section>
      <Card title="Details">
        <div className="ticket-detail__details">
          <div className="ticket-detail__details__reported">
            <label>Reported</label>
            <div>{new Date(ticket.reportedTime).toLocaleString()}</div>
          </div>
          <div className="ticket-detail__details__status">
            <label>Status</label>
            <div>
              <span className={'box ticket-status ticket-status__' + ticket.status}>
                {TicketStatusLabels[ticket.status]}
              </span>
            </div>
          </div>
          <div className="ticket-detail__details__description">
            <label>Description</label>
            <div>{ticket.description}</div>
          </div>
        </div>
      </Card>
    </section>
  );
}

TicketDetails.defaultProps = {
  ticket: null
};
TicketDetails.propTypes = {
  ticket: PropTypes.object
};

export default TicketDetails;
