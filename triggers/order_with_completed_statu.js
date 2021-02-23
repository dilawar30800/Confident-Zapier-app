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
      status_id: 4,
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
    sample: {
      client_id: 3559,
      completed_date: '2018-10-01T15:15:23.508679',
      id: '1807ITL0001',
      last_modified: '2018-10-01T15:15:23.508679',
      lims_id: null,
      ordered_date: '2018-07-10T14:57:13.126922',
      status_id: 4,
      status_name: 'Completed',
      verified_date: '2018-07-10T15:20:22.774903',
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
  key: 'order_with_completed_statu',
  noun: 'order',
  display: {
    label: 'Order with completed Status',
    description: 'order with completed status',
    hidden: true,
    important: false,
  },
};
