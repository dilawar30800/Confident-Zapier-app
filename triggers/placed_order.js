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
      status_id: 2,
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
      id: '2007ITL0013',
      last_modified: '2020-07-16T08:08:28.292769',
      lims_id: '',
      ordered_date: '2020-07-16T08:08:28.292769',
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
  key: 'placed_order',
  noun: 'order',
  display: {
    label: 'Order with Placed Status',
    description: 'To get only Placed order status',
    hidden: true,
    important: false,
  },
};
