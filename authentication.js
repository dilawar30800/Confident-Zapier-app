const testAuth = (z, bundle) => {
  // const crypto = z.require('crypto');
  // function createRequestSignature(secret, ts) {
  // var hmac = crypto.createHmac('sha1', secret);
  //     hmac.update(ts);
  //     return hmac.digest('hex');
  // }
  // var method = 'GET';
  // var route = '/api/v0/signingtest/';
  // var headers = {'X-ConfidentCannabis-Timestamp': '1474507118.77095'};
  // var data = {'foo': 1, 'bar': 2};
  // var apiKey = '88b750a8-d414-4aee-b26c-2cc7e85434dd';
  // var apiSecret = '043bca27-c4d1-4d39-86d6-e5f0c3b4bb4f';
  // var signed = bundle.inputData.signed;
  // var header = '';
  // if (signed){

  // }
  // else{
  //   header = bundle.authData.api_key;
  // }
  const options = {
    url: 'https://api.confidentcannabis.com/v0/clients',
    method: 'GET',
    headers: {
      'X-ConfidentCannabis-APIKey': bundle.authData.api_key,
    },
    params: {
      api_key: bundle.authData.api_key,
      signed: bundle.authData.signed,
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
  type: 'custom',
  test: testAuth,
  fields: [
    {
      computed: false,
      key: 'signed',
      required: false,
      label: 'Signed',
      choices: { Enabled: true, Disabled: false },
    },
    { computed: false, key: 'api_key', required: true, label: 'API' },
  ],
  customConfig: {},
};
