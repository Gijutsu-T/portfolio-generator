# Portfolio Generator

A dynamic portfolio generator that allows users to create and customize their portfolios with advanced features, such as:

- Profile picture upload
- Social media links with icons
- Multiple themes and layouts
- Contact form with email integration
- User authentication and profile management



## Features

- **Frontend**: Static HTML, CSS, and JavaScript (customizable for portfolio styling)
- **Backend**: Node.js and Express.js server for dynamic data handling, form submissions, user authentication, etc.
- **Database**: MongoDB (via MongoDB Atlas or local setup)
- **Social Media Integration**: Add links and user information for various social media platforms, music apps, and games, displayed as clickable icons.
- **Custom Logo Upload**: Users can upload their logos for the portfolio.
- **Authentication**: Email-based registration and login (JWT tokens).



## Technologies Used

### Frontend

- HTML, CSS, JavaScript (Vanilla, with potential enhancements)
- Bootstrap (optional) for responsive layouts
- FontAwesome or custom icons for social media links

### Backend

- Node.js (JavaScript runtime)
- Express.js (Web framework for building the API)
- MongoDB (Database for user and portfolio data)
- Nodemailer (For sending emails via the contact form)
- JWT (JSON Web Tokens) for user authentication



## Development Tools

- `npm` (Node Package Manager) for managing backend dependencies
- `dotenv` (Environment variable management)
- `bcryptjs` (Password hashing)
- `CORS` (Cross-Origin Resource Sharing)



## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio-generator.git
cd portfolio-generator
```

### 2. Frontend Setup

- The frontend files are located in the `frontend/` folder.
- Host them on GitHub Pages, Netlify, Vercel, or open `index.html` directly in your browser.

#### Customization

- **`index.html`**: The main HTML file for your portfolio page.
- **`style.css`**: Styling of the portfolio.
- **`app.js`**: JavaScript functionality for dynamic content rendering.
- Use FontAwesome or custom icons for social media in the `assets/` folder.

### 3. Backend Setup

- The backend files are in the `backend/` folder.

#### Install Dependencies

```bash
cd backend
npm install
```

#### Environment Configuration

Create a `.env` file in the `backend/` folder and add the following variables:

```env
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
EMAIL_USERNAME=<your_email_username>
EMAIL_PASSWORD=<your_email_password>
PORT=5000
```

- **MongoDB URI**: Use MongoDB Atlas (cloud) or set up a local MongoDB instance.
- **JWT Secret**: A unique string for signing JWT tokens.
- **Email Credentials**: For sending emails with Nodemailer.

> Ensure `.env` is added to `.gitignore` to avoid pushing sensitive data to GitHub.

### 4. Running the Backend Server

Start the server:

```bash
npm start
```

- The server will run at `http://localhost:5000` (or the port in `.env`).
- Test API routes with tools like Postman or Insomnia.

### 5. API Routes

- **POST /register**: Register a new user.
- **POST /login**: User login.
- **POST /portfolio**: Submit portfolio data.
- **GET /portfolio/:userId**: Retrieve user portfolio data.



## Testing the System

### Frontend

- Open `frontend/index.html` in your browser.
- Test responsiveness and customization features.

### Backend

- Use Postman/Insomnia to test API endpoints:
  - `POST /register`: Provide `username`, `email`, and `password`.
  - `POST /login`: Provide `username/email` and `password`.
  - `POST /portfolio`: Submit portfolio details (e.g., profile, social links).



## Additional Notes

- **Social Media Links**: Supported platforms include Facebook, Twitter, Instagram, Spotify, SoundCloud, Steam, Epic Games, and more.
- **Responsive Design**: The frontend is mobile-friendly and can be further customized in `style.css`.



## License

**MIT License** – Feel free to use and modify the project for your purposes.



## Backend Key Imports

- `express`: Core framework for the API.
- `mongoose`: MongoDB integration.
- `jsonwebtoken`: JWT-based user authentication.
- `bcryptjs`: Password hashing.
- `dotenv`: Environment variable management.
- `cors`: Enable cross-origin resource sharing.
- `nodemailer`: Email handling via the contact form.