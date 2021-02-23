const perform = (z, bundle) => {
  var orders = [];
  const options = {
    url: 'https://api.confidentcannabis.com/v0/orders',
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

    for (var i = 0; i < results.orders.length; i++) {
      if (results.orders[i].status_id !== 0) {
        orders.push(results.orders[i]);
      }
    }
    return orders;
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      client_id: 14612,
      completed_date: null,
      id: '2007ITL0014',
      last_modified: '2020-07-21T12:15:10.421777',
      lims_id: '',
      ordered_date: '2020-07-16T11:25:01.869252',
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
  key: 'orders_are_not_cancelled',
  noun: 'order',
  display: {
    label: 'Orders without Cancelled',
    description: 'order without including cancelled orders',
    hidden: true,
    important: false,
  },
};
