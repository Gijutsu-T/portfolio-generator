document.addEventListener('DOMContentLoaded', () => {
    // form submission
    const portfolioForm = document.getElementById('portfolio-form');
  
    portfolioForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(portfolioForm);
      
      try {
        const response = await fetch('/api/portfolio/create', {
          method: 'POST',
          body: formData,
        });
  
        const result = await response.json();
        
        if (result.success) {
          alert('Portfolio created successfully!');
        } else {
          alert('Error: ' + result.message);
        }
      } catch (error) {
        alert('Error: ' + error.message);
      }
    });
  });
  