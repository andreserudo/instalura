import React from 'react';
import PropTypes from 'prop-types';

import ContentWrapper from './styles';

function WebsitePage({ children }) {
  return (
    <ContentWrapper>
      { children }
    </ContentWrapper>
  );
}

WebsitePage.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default WebsitePage;
