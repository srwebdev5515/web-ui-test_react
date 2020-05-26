import React, { useContext } from 'react';
import './TicketList.scss';

import { SearchInput } from '../../forms';
import TicketTable from '../TicketTable';
import TicketsContext from '../../../contexts/TicketsContext';

const TicketList = () => {
  const { changeSearchQuery } = useContext(TicketsContext);
  
  const handleSearchQueryChange = (event) => {
    changeSearchQuery(event.target.value);
  };

  return (
    <div className="ticket-list">
      <div className="ticket-list__search-wrapper">
        <SearchInput onChange={handleSearchQueryChange} />
      </div>
      <div className="ticket-list__table">
        <TicketTable />
      </div>
    </div>
  );
};

export default TicketList;
