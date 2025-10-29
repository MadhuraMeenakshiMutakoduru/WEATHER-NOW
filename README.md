# Instant Weather App

A responsive weather application built with **React + Vite**, displaying real-time weather data such as temperature, humidity, and wind speed for any city.  
The app uses the **Open-Meteo API** and adjusts visuals dynamically based on the temperature.

---

🚀 Live Demo
- **Deployed App: https://stackblitz.com/~/github.com/MadhuraMeenakshiMutakoduru/WEATHER-NOW
- Video Demonstration: https://drive.google.com/file/d/1pAlcE5q-lnU_F-_819-mNKqatdtuZRkW/view?usp=sharing


---

🧭 Overview
Instant Weather App allows users to instantly check current weather details by entering a city name. It’s designed with a clean and adaptive UI that maintains layout consistency across all screen sizes.  

The application was inspired by the need to provide a simple yet elegant solution for quick weather checks — perfect for users like *Jamie*, the outdoor enthusiast persona.

---

✨ Features
- Real-time temperature, humidity, and wind speed.  
- Automatic weather icon change based on temperature.  
- Responsive and mobile-friendly UI.  
- Smooth gradient background.  
- Handles invalid city names gracefully.  
- Displays date and time based on the city’s timezone.

---

🛠️ Tech Stack

| Category | Tools |
|-----------|--------|
| Frontend | React + Vite |
| API | Open-Meteo API |
| Styling | CSS3 (Flexbox, Gradients, Media Queries) |
| IDE | Visual Studio Code |
| Hosting | Stackblitz|

---

⚙️ Installation and Setup

To run this project locally:

1. Clone the Repository
https://github.com/MadhuraMeenakshiMutakoduru/WEATHER-NOW.git

2. Navigate into the Folder
cd instant-weather-vite

4. Install Dependencies
npm install

6. Start the Development Server
npm run dev

8. Open in Browser
Go to the local development URL shown in your terminal, usually: http://localhost:5173/


🧩 Project Notes
Project Objective
To build a modern and minimal weather app using Vite for faster builds and React hooks for interactive UI updates.

Challenges & Solutions
Issue: Lag while fetching data.
Fix: Added async loading state and conditional rendering.

Issue: Layout shifting when “Fetching Data” appears.
Fix: Positioned results below the search bar to prevent resizing.

Issue: Dynamic background and icons.
Fix: Added logic to change visuals based on temperature thresholds.

Key Learnings
Integrating and handling APIs efficiently using async/await in React.
Managing state with useState and conditional rendering.
Implementing responsive layouts using CSS Flexbox and media queries.
Deploying Vite-based React apps on hosting platforms.

📈 Future Improvements
Add forecast for the next 3–5 days.
Integrate geolocation for automatic city detection.
Include temperature unit toggle (Celsius ↔ Fahrenheit).
Display sunrise/sunset and atmospheric pressure.

👩‍💻 Author
Madhura Meenakshi Mutakoduru

LinkedIn: https://www.linkedin.com/in/madhura-meenakshi-mutakoduru-03ab1a375/

GitHub: https://github.com/MadhuraMeenakshiMutakoduru

📚 Acknowledgments
Open-Meteo API for weather data.
Vite for the fast development environment.
Guidance and debugging support from ChatGPT.
