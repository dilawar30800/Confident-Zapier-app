const perform = (z, bundle) => {
  const options = {
    url: 'https://api.confidentcannabis.com/v0/testpackages',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // 'X-SIGNED': bundle.authData.signed,
      'X-ConfidentCannabis-APIKey': bundle.authData.api_key,
    },
    params: {},
    body: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results.test_packages;
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      description: 'who dat boi!',
      id: 70706,
      name: 'test',
      test_types: [
        { abbreviation: 'CAN', id: 1, name: 'Cannabinoids' },
        { abbreviation: 'TER', id: 2, name: 'Terpenes' },
        { abbreviation: 'HVY', id: 7, name: 'Heavy Metals' },
      ],
    },
    outputFields: [
      { key: 'description' },
      { key: 'id' },
      { key: 'name' },
      { key: 'test_types[]abbreviation' },
      { key: 'test_types[]id' },
      { key: 'test_types[]name' },
    ],
  },
  key: 'test_packages',
  noun: 'package',
  display: {
    label: 'New Test Package',
    description: 'To get a newly created package',
    hidden: false,
    important: true,
  },
};
