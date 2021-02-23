const perform = (z, bundle) => {
  var order_id = bundle.inputData.order_id;
  const options = {
    url:
      'https://api.confidentcannabis.com/v0/order/' +
      order_id +
      '/status/cancel',
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
        dynamic: 'orders_are_not_cancelled.id.id',
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
    sample: { success: true },
  },
  key: 'cancel_order',
  noun: 'Cancel Order',
  display: {
    label: 'Cancel Order',
    description: 'This will Cancel the order',
    hidden: false,
    important: true,
  },
};
