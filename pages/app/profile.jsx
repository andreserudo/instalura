import React from 'react';
import authService from '../../src/services/Authorization';
import websitePageHOC from '../../src/components/wrappers/HighOrderComponent';

function Profile(props) {
  return (
    <div>
      <h1>Esse é o profile do cara!</h1>
      <pre>
        {JSON.stringify(props, null, 4)}
      </pre>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasSession = auth.hasActiveSession();

  return {
    props: {
      nome: 'andre',
    },
  };
}

export default websitePageHOC(Profile);
