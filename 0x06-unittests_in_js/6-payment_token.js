/* eslint-disable consistent-return */
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({
      data: 'Successful response from the API',
    });
  }
}

module.exports = getPaymentTokenFromAPI;
