const perform = (z, bundle) => {
  const options = {
    url: 'https://api.confidentcannabis.com/v0/samples',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // 'X-SIGNED': bundle.authData.signed,
      'X-ConfidentCannabis-APIKey': bundle.authData.api_key,
    },
    params: {
      order_status_id: bundle.inputData.order_status_id,
      modified_since_time: bundle.inputData.modified_since_time,
      client_id: bundle.inputData.client_id,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results.samples;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'order_status_id',
        type: 'string',
        label: 'Order Status',
        dynamic: 'order_status.id.name',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'modified_since_time',
        label: 'Modified Since Time',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'client_id',
        label: 'Client',
        type: 'string',
        dynamic: 'get_clients.id.name',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      client_id: 3559,
      id: '2007ITL0002.0002',
      lab: { id: 3, name: 'Internal Testing Lab' },
      last_modified: '2020-07-03T01:46:34.194421',
      lims_id: null,
      order_id: '2007ITL0002',
      order_lims_id: null,
      order_status_id: 2,
      order_status_name: 'Placed',
      production_method_id: 1,
      production_method_name: 'Indoor',
      sample_category_id: 1,
      sample_category_name: 'Plant',
      sample_name: 'hannabis 007',
      sample_type_id: 1,
      sample_type_name: 'Flower - Cured',
      strain_name: 'hannabis',
      test_packages: [{ id: 5686, name: 'Everything except Ratio' }],
    },
    outputFields: [
      { key: 'client_id' },
      { key: 'id' },
      { key: 'lab__id' },
      { key: 'lab__name' },
      { key: 'last_modified' },
      { key: 'lims_id' },
      { key: 'order_id' },
      { key: 'order_lims_id' },
      { key: 'order_status_id' },
      { key: 'order_status_name' },
      { key: 'production_method_id' },
      { key: 'production_method_name' },
      { key: 'sample_category_id' },
      { key: 'sample_category_name' },
      { key: 'sample_name' },
      { key: 'sample_type_id' },
      { key: 'sample_type_name' },
      { key: 'strain_name' },
      { key: 'test_packages[]id' },
      { key: 'test_packages[]name' },
    ],
    canPaginate: false,
  },
  key: 'get_samples',
  noun: 'Sample',
  display: {
    label: 'New Sample',
    description: 'To get new sample when created in the system',
    hidden: false,
    important: true,
  },
};
