const mongoose = require('../db'); // Import DB connection
const { Schema } = mongoose;

const portfolioSchema = new Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  socialLinks: [{
    platform: String,
    link: String,
  }],
  imageURL: String, // Store image URL if uploaded
  createdAt: { type: Date, default: Date.now },
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
