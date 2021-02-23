const perform = (z, bundle) => {
  const options = {
    url: 'https://api.confidentcannabis.com/v0/orders',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // 'X-SIGNED': bundle.authData.signed,
      'X-ConfidentCannabis-APIKey': bundle.authData.api_key,
    },
    params: {
      status_id: bundle.inputData.status_id,
      modified_since_time: bundle.inputData.modified_since_time,
      client_id: bundle.inputData.client_id,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results.orders;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'status_id',
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
        type: 'string',
        label: 'Client',
        dynamic: 'get_clients.id.name',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      client_id: 3559,
      completed_date: null,
      id: '2007ITL0002',
      last_modified: '2020-07-03T01:46:34.572802',
      lims_id: null,
      ordered_date: '2020-07-03T01:29:54.647446',
      status_id: 2,
      status_name: 'Placed',
      verified_date: null,
    },
    outputFields: [
      { key: 'client_id' },
      { key: 'completed_date' },
      { key: 'id' },
      { key: 'last_modified' },
      { key: 'lims_id' },
      { key: 'ordered_date' },
      { key: 'status_id' },
      { key: 'status_name' },
      { key: 'verified_date' },
    ],
  },
  key: 'get_orders',
  noun: 'order',
  display: {
    label: 'New Order',
    description: 'To get new order order when it is created in system',
    hidden: false,
    important: true,
  },
};
