const httpClient = async (url, { headers, body, method }) => {
  try {
    const abc = await fetch(url, {
      method,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(body),
    });
    const response = await abc.json();

    // const fixedResponse = {
    //   data: {
    //     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlOTAzNWY1YmIwMTlhM2M2MjU3MmRhIiwidXNlcm5hbWUiOiJvbWFyaW9zb3V0byIsInJvbGUiOlsidXNlciJdfSwiaWF0IjoxNjE5MjA5MzQ0LCJleHAiOjE2MTk4MTQxNDR9.CtCHNTwTOOhlQrAfYzOU6-Pdp_QouQwIFAbEzCzwPQ0',
    //     user: {
    //       id: '5fe9035f5bb019a3c62572da',
    //       username: 'omariosouto',
    //       name: 'Mario Souto',
    //     },
    //   },
    // };

    return response;
  } catch (error) {
    return {
      message: 'Something went wrong ',
    };
  }
};

export default httpClient;
