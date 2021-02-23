const perform = (z, bundle) => {
  const options = {
    url: 'https://api.confidentcannabis.com/v0/orderstatuses',
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

    return results.order_statuses;
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: { id: 0, name: 'Canceled' },
    outputFields: [{ key: 'id' }, { key: 'name' }],
  },
  key: 'order_status',
  noun: 'status',
  display: {
    label: 'Order Status',
    description: 'To get all order statues from the app',
    hidden: true,
    important: false,
  },
};
