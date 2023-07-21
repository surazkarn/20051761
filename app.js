const express = require('express');
const trainsRoutes = require('./trains/routes/trainsRoutes');
const numberManagementRoutes = require('./number-management-services/routes/numberManagementRoutes');

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use('/trains', trainsRoutes);
app.use('/numbers', numberManagementRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
