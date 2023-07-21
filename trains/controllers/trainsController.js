const axios = require('axios');

async function getTrains(authToken) {
  const url = 'http://20.244.56.144/train/trains';
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  try {
    const response = await axios.get(url, { headers });
    const trainData = response.data;
    return trainData;
  } catch (error) {
    throw new Error('Error fetching train schedules: ' + error.message);
  }
}

function filterAndSortTrains(trains) {
  // ... (implementation as provided earlier)
  // ... (no change in this function)
}

module.exports = {
  getTrains,
  filterAndSortTrains,
};
