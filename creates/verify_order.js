const perform = (z, bundle) => {
  var order_id = bundle.inputData.order_id;
  const options = {
    url:
      'https://api.confidentcannabis.com/v0/order/' +
      order_id +
      '/status/verify',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      // 'X-SIGNED': bundle.authData.signed,
      'X-ConfidentCannabis-APIKey': bundle.authData.api_key,
    },
    params: {},
    body: {
      order: JSON.stringify({
        'message ': bundle.inputData.message,
        'send_client_email ': bundle.inputData.send_client_email,
      }),
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
        dynamic: 'placed_order.id.id',
        helpText:
          "Verify an order (move an order from 'placed' to 'in progress').\nCan only be done if the order is in the 'placed' status.",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'message',
        label: 'Message',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'send_client_email',
        label: 'Send Client Email',
        type: 'boolean',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'verify_order',
  noun: 'Verify Order',
  display: {
    label: 'Verify Order',
    description: 'This will Verify Order the order',
    hidden: false,
    important: true,
  },
};
