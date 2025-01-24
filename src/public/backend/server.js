const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const portfolioRoutes = require('./routes/portfolioRoutes');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/portfolio', portfolioRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
