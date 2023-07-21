const { getRealTimeTrainSchedules } = require('../models/trainModel');

function filterAndSortTrains(trains) {
  const now = new Date();
  const allowedTimeWindow = 30 * 60 * 1000; 

  return trains
    .filter((train) => new Date(train.departureTime).getTime() - now.getTime() > allowedTimeWindow)
    .sort((a, b) => {
     
      if (a.price.sleeper === b.price.sleeper) {
        
        return b.price.AC - a.price.AC;
      }
      return a.price.sleeper - b.price.sleeper;
    });
}


async function getTrainSchedules(req, res) {
  try {
    const trains = await getRealTimeTrainSchedules();
    const filteredAndSortedTrains = filterAndSortTrains(trains);
    res.status(200).json(filteredAndSortedTrains);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getTrainSchedules,
};
