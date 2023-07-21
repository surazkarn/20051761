const express = require('express');
const app = express();

const authController = require('./trains/controllers/authControllers');
const trainController = require('./trains/controllers/trainsController');
const numberManagementRoutes = require('./number-management-services/routes/numberManagementRoutes');

const port = 3000;

app.use(express.json());

// Route to register the company
app.post('/register', async (req, res) => {
    try {
      const companyData = req.body;
      const registrationData = await authController.registerCompany(companyData);
      res.json(registrationData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Route to obtain the authentication token
  app.post('/auth', async (req, res) => {
    try {
      const authData = req.body;
      const tokenData = await authController.getAuthToken(authData);
      res.json(tokenData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Route to get train schedules
  app.get('/trains', async (req, res) => {
    try {
      // Assuming you have an authentication middleware to validate the token
      const authToken = req.headers.authorization.split(' ')[1];
      const trainData = await trainController.getTrains(authToken);
      const filteredAndSortedTrains = trainController.filterAndSortTrains(trainData);
      res.json(filteredAndSortedTrains);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.use('/numbers', numberManagementRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
