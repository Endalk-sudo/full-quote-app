# Quote Generator App

This project is a full-stack web application that generates random motivational quotes. It consists of a Node.js/Express backend with MongoDB for storing quotes, and a modern frontend built with HTML, CSS, and JavaScript.

## Features
- Fetch a random quote from the database
- Add new quotes (API endpoint, currently commented)
- Responsive and visually appealing frontend

## Project Structure

```
full quote-app/
│
├── backend/
│   ├── config/
│   │   └── db.js         # MongoDB connection logic
│   ├── models/
│   │   └── Quote.js      # Mongoose schema for quotes
│   ├── data.js           # Initial quote data (for seeding)
│   └── index.js          # Main Express server
│
├── frontend/
│   ├── app.js            # Frontend logic (fetch/display quotes)
│   ├── index.html        # Main HTML file
│   ├── style.css         # Styling
│   └── asset/
│       └── image_fx.jpg  # Logo image
│
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud)

### Backend Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file in `backend/` with your MongoDB connection string:
   ```env
   DB_HOST=your_mongodb_connection_string
   ```
3. Start the backend server:
   ```sh
   node backend/index.js
   ```

### Frontend Usage
- Open `frontend/index.html` in your browser, or access via `http://localhost:8000/` if served by the backend.

## API Endpoints
- `GET /quote` — Get a random quote
- `POST /quote` — Add a new quote (currently commented out in code)

## Author
- Endalk

---

Feel free to customize and extend this project!
