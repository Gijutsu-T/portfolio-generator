const Portfolio = require('../models/portfolioModel');

// Create a new portfolio
exports.createPortfolio = async (req, res) => {
  const { name, bio, socialLinks, imageURL } = req.body;
  
  const portfolio = new Portfolio({
    name,
    bio,
    socialLinks,
    imageURL, // Assuming imageURL was stored after upload
  });
  
  try {
    const newPortfolio = await portfolio.save();
    res.status(201).json({ success: true, portfolio: newPortfolio });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Fetch a portfolio by ID
exports.viewPortfolio = async (req, res) => {
  const { id } = req.params;

  try {
    const portfolio = await Portfolio.findById(id);
    if (!portfolio) {
      return res.status(404).json({ success: false, message: 'Portfolio not found' });
    }
    res.status(200).json({ success: true, portfolio });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
