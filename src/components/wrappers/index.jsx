import React from 'react';
import PropTypes from 'prop-types';

function WebsitePage({ children }) {
  return (
    <div>
      { children }
    </div>
  );
}

WebsitePage.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default WebsitePage;
