/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../Provider';

export default function websitePageHOC(
  PageComponent,
) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
