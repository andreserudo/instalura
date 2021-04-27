import React from 'react';
import FormLogin from '../src/components/common/FormLogin';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import websitePageHOC from '../src/components/wrappers/HighOrderComponent';

function Home() {
  return (
    <>
      <h1>Página Inicial</h1>
      <FormLogin />
    </>
  );
}

export default websitePageHOC(Home);
