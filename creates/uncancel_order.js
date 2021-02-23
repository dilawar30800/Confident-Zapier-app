const perform = (z, bundle) => {
  var order_id = bundle.inputData.order_id;
  const options = {
    url:
      'https://api.confidentcannabis.com/v0/order/' +
      order_id +
      '/status/uncancel',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      // 'X-SIGNED': bundle.authData.signed,
      'X-ConfidentCannabis-APIKey': bundle.authData.api_key,
    },
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
        dynamic: 'order_with_cancelled_status.id.id',
        helpText:
          "Un-cancel an order (move an order from 'canceled' to\n'placed'). Can only be done if the order is in the 'canceled'\nstatus.",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'uncancel_order',
  noun: 'Uncancel Order',
  display: {
    label: 'Uncancel Order',
    description: 'This will Uncancel Order the order',
    hidden: false,
    important: true,
  },
};
