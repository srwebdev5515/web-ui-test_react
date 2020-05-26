import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../common/Card';

import './TicketOwner.scss';

const TicketOwner = ({ ticket }) => {
  return (
    <section>
      <Card title="Owner">
        <div className="ticket-detail__owner">
          <div className="ticket-detail__owner__avatar-wrapper">
            <img src={ticket.owner.avatar} alt="" />
          </div>
          <div className="ticket-detail__owner__info">
            <div className="ticket-detail__owner__info__name">
              {ticket.owner.firstName} {ticket.owner.lastName}
            </div>
            <div className="ticket-detail__owner__info__specialities">
              {ticket.owner.specialities[0]}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

TicketOwner.defaultProps = {
  ticket: null
};
TicketOwner.propTypes = {
  ticket: PropTypes.object
};

export default TicketOwner;
