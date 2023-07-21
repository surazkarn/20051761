const axios = require('axios');

async function registerCompany(companyData) {
  const url = 'http://20.244.56.144/train/register';

  try {
    const response = await axios.post(url, companyData);
    const registrationData = response.data;
    return registrationData;
  } catch (error) {
    throw new Error('Failed to register company: ' + error.message);
  }
}

async function getAuthToken(authData) {
  const url = 'http://20.244.56.144/train/auth';

  try {
    const response = await axios.post(url, authData);
    const tokenData = response.data;
    return tokenData;
  } catch (error) {
    throw new Error('Failed to obtain authentication token: ' + error.message);
  }
}

module.exports = {
  registerCompany,
  getAuthToken,
};
