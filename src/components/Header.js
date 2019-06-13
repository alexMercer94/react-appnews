import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
    <nav className="nav-wrapper light-blue darken-3">
        <a className="brand-logo center" href="#!">
            {title}
        </a>
    </nav>
);

/**
 * PropTypes
 */
Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
