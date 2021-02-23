const perform = (z, bundle) => {
  var order_id = bundle.inputData.order_id;
  const options = {
    url: 'https://api.confidentcannabis.com/v0/order/' + order_id,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      // 'X-SIGNED': bundle.authData.signed,
      'X-ConfidentCannabis-APIKey': bundle.authData.api_key,
    },
    params: {},
    body: {
      order: JSON.stringify({
        client_license_id: bundle.inputData.client_license_id,
        lab_license_id: bundle.inputData.lab_license_id,
        pickup: bundle.inputData.pickup,
        address_id: bundle.inputData.address_id,
        price_adjustment: bundle.inputData.price_adjustment,
        send_client_email: bundle.inputData.send_client_email,
        lims_id: bundle.inputData.lims_id,
        secondary_client_name: bundle.inputData.secondary_client_name,
        secondary_client_type: bundle.inputData.secondary_client_type,
        secondary_client_address: bundle.inputData.secondary_client_address,
        secondary_client_license: bundle.inputData.secondary_client_license,
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
        dynamic: 'get_orders.id.id',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'client_license_id',
        label: 'Client License ID',
        type: 'string',
        helpText:
          'Identifier for client license under which this order should be placed (the ID, not the license number)',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'lab_license_id',
        label: 'Lab License ID',
        type: 'string',
        helpText:
          'Identifier for lab license under which this order should be placed (the ID, not the license number)',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'pickup',
        label: 'Pickup',
        type: 'boolean',
        helpText:
          'True if this order should be picked up at the client location',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'address_id',
        label: 'Address ID',
        type: 'string',
        helpText:
          'Lab address id for drop-off orders, client address id for pickup orders',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'price_adjustment',
        label: 'Price Adjustment',
        type: 'string',
        helpText:
          'Dollar amount to change order by (negative for discount, positive for additional fees)',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'send_client_email',
        label: 'Send Client Email',
        type: 'boolean',
        helpText:
          'If true, the client will receive email notifications for the order being placed. defaults to true',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'lims_id',
        label: 'Internal Tracking ID',
        type: 'string',
        helpText: 'Internal tracking ID for this sample',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'secondary_client_name',
        label: 'Secondary Client Name',
        type: 'string',
        helpText: 'Company name for secondary client',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'secondary_client_type',
        label: 'Secondary Client Type',
        type: 'string',
        choices: { '1': 'producer', '2': 'distributer' },
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'secondary_client_address',
        label: 'Secondary Client Address',
        type: 'string',
        helpText: 'Full address string for secondary client',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'secondary_client_license',
        label: 'Secondary Client_License',
        type: 'string',
        helpText: 'License used by secondary client for order transaction',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'update_order',
  noun: 'Order',
  display: {
    label: 'Update Order',
    description: 'This will update the order',
    hidden: false,
    important: true,
  },
};
