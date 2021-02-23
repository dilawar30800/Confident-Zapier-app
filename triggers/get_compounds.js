const perform = (z, bundle) => {
  const options = {
    url: 'https://api.confidentcannabis.com/v0/compounds',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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

    return results.compounds.map(function (e) {
      e.id = e.category + e.display_name + e.name + e.synonym_for_compound_name;
      return e;
    });
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      category: 'cannabinoids',
      display_name: '11-Hydroxy-THC',
      is_synonym: false,
      name: '11_hydroxy_thc',
      synonym_for_compound_name: '',
      id: 'cannabinoids11-Hydroxy-THC11_hydroxy_thc',
    },
    outputFields: [
      { key: 'category' },
      { key: 'display_name' },
      { key: 'is_synonym' },
      { key: 'name' },
      { key: 'synonym_for_compound_name' },
      { key: 'id' },
    ],
  },
  key: 'get_compounds',
  noun: 'Compound',
  display: {
    label: 'New Compund',
    description: 'To get a newly created compounds from the system.',
    hidden: false,
    important: true,
  },
};
