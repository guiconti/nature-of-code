import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div>
      <h2 className="alt-header">
        {title}
      </h2>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
