const perform = (z, bundle) => {
  const options = {
    url: 'https://api.confidentcannabis.com/v0/sampleclassifications',
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

    return results.sample_classifications;
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: { id: 1, name: '' },
    outputFields: [{ key: 'id' }, { key: 'name' }],
  },
  key: 'sample_classifications',
  noun: 'classification',
  display: {
    label: 'New Sample Classification',
    description:
      'Trigger when a new sample classification added to the system.',
    hidden: false,
    important: false,
  },
};
