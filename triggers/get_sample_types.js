const perform = (z, bundle) => {
  const options = {
    url: 'https://api.confidentcannabis.com/v0/sampletypes',
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

    return results.sample_types;
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      category_id: 1,
      category_name: 'Plant',
      id: 1,
      name: 'Flower - Cured',
    },
    outputFields: [
      { key: 'category_id' },
      { key: 'category_name' },
      { key: 'id' },
      { key: 'name' },
    ],
  },
  key: 'get_sample_types',
  noun: 'sample',
  display: {
    label: 'New Sample Type',
    description: 'Trigger when a new sample type added into the system.',
    hidden: false,
    important: false,
  },
};
