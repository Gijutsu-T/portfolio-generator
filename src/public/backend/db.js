const mongoose = require('mongoose');

// Database URL from environment variable 
const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/portfolioGenerator';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

module.exports = mongoose;
