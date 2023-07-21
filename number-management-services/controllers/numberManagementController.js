const axios = require('axios');

async function getNumbersFromURL(url) {
  try {
    const response = await axios.get(url, { timeout: 500 }); // Respect the timeout of 500 milliseconds
    return response.data.numbers;
  } catch (error) {
    console.error(`Error fetching numbers from URL ${url}:`, error);
    return [];
  }
}

async function getUniqueSortedNumbers(req, res) {
  const urls = req.query.url;
  const uniqueNumbers = new Set();

  try {
    const promises = urls.map(getNumbersFromURL);
    const numbersArrays = await Promise.all(promises);

    numbersArrays.forEach((numbers) => {
      numbers.forEach((number) => {
        uniqueNumbers.add(number);
      });
    });

    const sortedNumbers = [...uniqueNumbers].sort((a, b) => a - b);
    res.status(200).json({ numbers: sortedNumbers });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getUniqueSortedNumbers,
};
