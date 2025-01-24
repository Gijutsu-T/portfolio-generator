// Validate URL format (for social media links)
function isValidURL(url) {
    const regex = /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(\/[a-zA-Z0-9\-\.\/?%&=]*)?$/;
    return regex.test(url);
  }
  
  module.exports = {
    isValidURL,
  };
  