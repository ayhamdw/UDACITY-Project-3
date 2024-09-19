# Weather Journal App

Welcome to the **Weather Journal App**! This project is designed to capture and display weather data along with user-generated content. By entering a zip code and personal feelings, users can fetch the current weather from the OpenWeatherMap API and store their input. This data is then displayed dynamically on the web page.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Project Overview

The Weather Journal App allows users to:

1. Enter a zip code to fetch weather data.
2. Input their feelings about the current weather.
3. Post the data to a server and display it dynamically on the webpage.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ayhamdw/UDACITY-Project-3.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   node server.js
   ```

4. **Open the browser:**
   Navigate to `http://localhost:8785` in your web browser to view the app.

## Usage

1. **Enter the zip code:**
   Type a valid zip code into the input field labeled "Zip Code".

2. **Share your feelings:**
   Enter your thoughts or feelings about the current weather in the "Feelings" input field.

3. **Generate weather data:**
   Click the "Generate" button to fetch weather data and display your entry.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Body-Parser**: Middleware to parse incoming request bodies.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **OpenWeatherMap API**: Source for fetching current weather data.

## API Endpoints

### GET `/all`

Fetch all stored data.

```bash
curl http://localhost:8785/all
```

### POST `/PostData`

Post new data to the server.

```bash
curl http://localhost:8785/PostData
```

---
