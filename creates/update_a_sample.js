module.exports = {
  operation: {
    perform: { body: { sample_id: '{{bundle.inputData.sample_id}}' } },
    inputFields: [
      {
        key: 'sample_id',
        label: 'sample Id',
        type: 'string',
        dynamic: 'get_samples.id.sample_name',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'update_a_sample',
  noun: 'sample',
  display: {
    label: 'Update Sample',
    description: 'To update an existing sample based upon its id',
    hidden: true,
    important: false,
  },
};
