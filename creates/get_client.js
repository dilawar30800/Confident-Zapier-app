const perform = (z, bundle) => {
  var client_id = bundle.inputData.client_id;
  const options = {
    url: 'https://api.confidentcannabis.com/v0/client/' + client_id,
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

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'client_id',
        label: 'Client ID',
        type: 'string',
        dynamic: 'get_clients.id.name',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      client: {
        email: 'c.richmond7+trainingclient@gmail.com',
        id: 14612,
        last_modified: '2019-02-08T17:58:28.231213',
        licenses: [
          {
            id: 5378,
            license_code: '',
            license_designation_name: 'Medical',
            license_number: '',
            license_type_name: 'Cultivation Center',
            nickname: '',
          },
        ],
        name: 'Cresco-Joliet',
        phone: '17087435312',
        primary_address: {
          address_line_1: null,
          address_line_2: null,
          city: 'morton',
          id: 18093,
          state_abbreviation: 'IL',
          zipcode: '61550',
        },
        training: true,
        url: null,
      },
      success: true,
    },
    outputFields: [
      { key: 'client__email' },
      { key: 'client__id' },
      { key: 'client__last_modified' },
      { key: 'client__licenses[]id' },
      { key: 'client__licenses[]license_code' },
      { key: 'client__licenses[]license_designation_name' },
      { key: 'client__licenses[]license_number' },
      { key: 'client__licenses[]license_type_name' },
      { key: 'client__licenses[]nickname' },
      { key: 'client__name' },
      { key: 'client__phone' },
      { key: 'client__primary_address__address_line_1' },
      { key: 'client__primary_address__address_line_2' },
      { key: 'client__primary_address__city' },
      { key: 'client__primary_address__id' },
      { key: 'client__primary_address__state_abbreviation' },
      { key: 'client__primary_address__zipcode' },
      { key: 'client__training' },
      { key: 'client__url' },
      { key: 'success' },
    ],
  },
  key: 'get_client',
  noun: 'Client',
  display: {
    label: ' Find Client by ID',
    description: 'This will get client by ID',
    hidden: false,
    important: false,
  },
};
