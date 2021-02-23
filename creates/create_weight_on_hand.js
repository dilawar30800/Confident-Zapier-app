const perform = (z, bundle) => {
  var sample_id = bundle.inputData.sample_id;
  const options = {
    url:
      'https://api.confidentcannabis.com/v0/sample/' +
      sample_id +
      '/weight_on_hand',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      // 'X-SIGNED': bundle.authData.signed,
      'X-ConfidentCannabis-APIKey': bundle.authData.api_key,
    },
    params: {},
    body: {
      unit: bundle.inputData.unit,
      amount_changed: bundle.inputData.amount_changed,
      change_reason: bundle.inputData.change_reason,
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
        key: 'sample_id',
        label: 'Sample',
        type: 'string',
        dynamic: 'get_samples.id.sample_name',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'unit',
        label: 'Unit',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
        default: 'g',
        choices: ['units', 'g'],
      },
      {
        key: 'amount_changed',
        label: 'Amount Changed',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'change_reason',
        label: 'Change Reason',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
        choices: [
          { sample: 'other', label: 'other', value: '0' },
          { sample: 'initial', label: 'initial', value: '1' },
          { sample: 'destroyed', label: 'destroyed', value: '2' },
          { sample: 'used', label: 'used', value: '3' },
          { sample: 'returned', label: 'returned', value: '4' },
          { sample: 'lost', label: 'lost', value: '5' },
          { sample: 'stolen', label: 'stolen', value: '6' },
          { sample: 'addition', label: 'addition', value: '7' },
        ],
      },
    ],
    sample: { success: true, weight_on_hand: { unit: 'g', weight: 210 } },
    outputFields: [
      { key: 'success' },
      { key: 'weight_on_hand__unit' },
      { key: 'weight_on_hand__weight' },
    ],
  },
  key: 'create_weight_on_hand',
  noun: 'Weight On Hand',
  display: {
    label: 'Create Weight On Hand',
    description: 'This will create Weight On Hand',
    hidden: false,
    important: true,
  },
};
