import React from 'react';
import PropTypes from 'prop-types';
import './SearchInput.scss';

const SearchInput = ({ onChange }) => {
  return (
    <div className="search-input-wrapper">
      <input type="text" className="input-search" onChange={onChange} />
    </div>
  );
};

SearchInput.defaultProps = {
  onChange: () => {}
};

SearchInput.propTypes = {
  onChange: PropTypes.func
};

export default SearchInput;
