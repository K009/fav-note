import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);
z;
UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

export default UserPageTemplate;
