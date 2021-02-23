const perform = (z, bundle) => {
  var fetch = z.require('node-fetch');
  const urls = ['http://nodejs.org/images/logo.png'];

  async function getAllUrls(urls) {
    try {
      var data = await Promise.all(
        urls.map((url) => fetch(url).then((response) => response))
      );

      return data;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
  async function test() {
    var responses = await getAllUrls(urls);
  }
  var res = test();

  const request = z.require('request');
  const FormData = z.require('form-data');
  const formData = new FormData();
  // var image=z.request('http://nodejs.org/images/logo.png');

  const options = {
    url: 'https://api.confidentcannabis.com/v0/order/2007ITL0012/document',
    method: 'POST',
    headers: {
      //'Content-Type': 'application/json',
      Accept: 'application/json',
      //'X-SIGNED': bundle.authData.signed,
      'X-ConfidentCannabis-APIKey': bundle.authData.api_key,
    },
    params: {},
    body: {
      document: res,
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
  operation: { perform: perform },
  key: 'upload_order_document',
  noun: 'Order Document',
  display: {
    label: 'Upload Order Document',
    description: 'Add a document to the order',
    hidden: true,
    important: false,
  },
};
