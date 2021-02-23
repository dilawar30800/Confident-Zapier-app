const perform = (z, bundle) => {
  const options = {
    url: 'https://api.confidentcannabis.com/v0/lab',
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

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      lab: {
        email: 'sa@confidentcannabis.com',
        id: 3,
        licenses: [
          {
            id: 1864,
            license_code: '',
            license_designation_name: 'Adult Use',
            license_number: '098765432',
            license_type_name: 'Testing Facility',
            nickname: 'Rec Lab',
          },
          {
            id: 1863,
            license_code: 'LAB1',
            license_designation_name: 'Medical',
            license_number: '1234567890',
            license_type_name: 'Testing Facility',
            nickname: 'Medical Lab',
          },
        ],
        name: 'Internal Testing Lab',
        phone: '18665065866',
        primary_address: {
          address_line_1: '123 Dank Street',
          address_line_2: '',
          city: 'Menlo Park',
          id: 62917,
          state_abbreviation: 'CA',
          zipcode: '94025',
        },
        url: 'https://www.confidentcannabis.com',
      },
      success: true,
    },
    outputFields: [
      { key: 'lab__email' },
      { key: 'lab__id' },
      { key: 'lab__licenses[]id' },
      { key: 'lab__licenses[]license_code' },
      { key: 'lab__licenses[]license_designation_name' },
      { key: 'lab__licenses[]license_number' },
      { key: 'lab__licenses[]license_type_name' },
      { key: 'lab__licenses[]nickname' },
      { key: 'lab__name' },
      { key: 'lab__phone' },
      { key: 'lab__primary_address__address_line_1' },
      { key: 'lab__primary_address__address_line_2' },
      { key: 'lab__primary_address__city' },
      { key: 'lab__primary_address__id' },
      { key: 'lab__primary_address__state_abbreviation' },
      { key: 'lab__primary_address__zipcode' },
      { key: 'lab__url' },
      { key: 'success' },
    ],
  },
  key: 'get_lab',
  noun: 'Lab',
  display: {
    label: 'Find Current Lab',
    description: 'Gets all the Labs',
    hidden: false,
    important: false,
  },
};
