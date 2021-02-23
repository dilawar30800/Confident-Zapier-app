const perform = (z, bundle) => {
  const options = {
    url: 'https://api.confidentcannabis.com/v0/sampleproductionmethods',
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

    return results.sample_production_methods;
  });
};

module.exports = {
  operation: { perform: perform },
  key: 'get_sample_production_methods',
  noun: 'production',
  display: {
    label: 'New Sample Production Method',
    description:
      'Trigger when a new sample production method created or added.',
    hidden: false,
    important: false,
  },
};
