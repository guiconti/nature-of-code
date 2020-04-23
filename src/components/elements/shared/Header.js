import React from 'react';
import PropTypes from 'prop-types';
import './styles/header.scss';

const Header = ({ children }) => {
  return (
    <div>
      <h2 className="header">
        {children}
      </h2>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired
};

export default Header;
