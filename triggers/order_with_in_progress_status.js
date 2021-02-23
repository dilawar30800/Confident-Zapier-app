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
      status_id: 3,
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
      client_id: 14612,
      completed_date: null,
      id: '2007ITL0012',
      last_modified: '2020-07-18T17:21:16.720243',
      lims_id: '',
      ordered_date: '2020-07-16T08:01:00.368059',
      status_id: 3,
      status_name: 'In Progress',
      verified_date: '2020-07-18T17:21:16.720243',
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
  key: 'order_with_InProgress_status',
  noun: 'order',
  display: {
    label: 'Order with In Progress Status',
    description: 'to get all order of status in progress',
    hidden: true,
    important: false,
  },
};
