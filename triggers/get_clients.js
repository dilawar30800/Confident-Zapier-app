const perform = (z, bundle) => {
  const options = {
    url: 'https://api.confidentcannabis.com/v0/clients',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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

    return results.clients.map(function (e) {
      e.id = e.id;
      return e;
    });
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      id: 14612,
      last_modified: '2019-02-08T17:58:28.231213',
      licenses: [{ id: 5378, license_code: '', license_number: '' }],
      name: 'Cresco-Joliet',
      training: true,
    },
    outputFields: [
      { key: 'id' },
      { key: 'last_modified' },
      { key: 'licenses[]id' },
      { key: 'licenses[]license_code' },
      { key: 'licenses[]license_number' },
      { key: 'name' },
      { key: 'training' },
    ],
  },
  key: 'get_clients',
  noun: 'client',
  display: {
    label: 'New Client',
    description: 'To get newly added client every time when a client added.',
    hidden: false,
    important: true,
  },
};
