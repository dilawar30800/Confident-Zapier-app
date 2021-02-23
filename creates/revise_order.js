const perform = (z, bundle) => {
  var order_id = bundle.inputData.order_id;
  const options = {
    url:
      'https://api.confidentcannabis.com/v0/order/' +
      order_id +
      '/status/revise',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
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
    inputFields: [
      {
        key: 'order_id',
        label: 'Order ID',
        type: 'string',
        dynamic: 'order_with_completed_statu.id.id',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: { success: true },
    outputFields: [{ key: 'success' }],
  },
  key: 'revise_order',
  noun: 'Revise Order',
  display: {
    label: 'Revise Order',
    description: 'This will revise the order',
    hidden: false,
    important: true,
  },
};
