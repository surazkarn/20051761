const express = require('express');
const trainsRoutes = require('./routes/trainRoutes');
const numberManagementRoutes = require('./routes/numberManagementRoutes');


const app = express();
const port = 3000; 

app.use(express.json());

app.use('/trains', trainsRoutes);
app.use('/numbers', numberManagementRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
