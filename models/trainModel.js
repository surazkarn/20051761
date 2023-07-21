const axios = require('axios');

const JohnDoeRailwaysAPI = 'http://20.244.56.144/train/trains';

async function getRealTimeTrainSchedules() {
  try {
    const response = await axios.get(JohnDoeRailwaysAPI);
    return response.data;
  } catch (error) {
    console.error('Error fetching train schedules:', error);
    return [];
  }
}

module.exports = {
  getRealTimeTrainSchedules,
};
