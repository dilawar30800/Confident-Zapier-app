const perform = (z, bundle) => {
  const options = {
    url: 'https://api.confidentcannabis.com/v0/testtypes',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      // 'X-SIGNED': bundle.authData.signed,
      'X-ConfidentCannabis-APIKey': bundle.authData.api_key,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results.test_types;
  });
};

module.exports = {
  operation: { perform: perform },
  key: 'get_test_types',
  noun: 'test',
  display: {
    label: 'New Test Type',
    description: 'Trigger when a  new sample type created in the system.',
    hidden: false,
    important: false,
  },
};
