import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../common/Card';

import './TicketAsset.scss';

const TicketAsset = ({ ticket }) => {
  return (
    <section>
      <Card title="Asset">
        <div className="ticket-detail__asset">
          <div className="ticket-detail__asset__name">
            <label>Name</label>
            <div>{ticket.asset.name}</div>
          </div>
          <div className="ticket-detail__asset__geocode">
            <label>GeoCode</label>
            <div>{ticket.asset.geoCode}</div>
          </div>
          <div className="ticket-detail__asset__location">
            <label>Location</label>
            <div>
              <span className="box">{ticket.asset.kmFrom.toFixed(3)}</span>
              <span className="box">{ticket.asset.kmTo.toFixed(3)}</span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

TicketAsset.defaultProps = {
  ticket: null
};
TicketAsset.propTypes = {
  ticket: PropTypes.object
};

export default TicketAsset;
