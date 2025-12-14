📌 Product Administrator — Frontend

This document describes the frontend of the Product Administrator PERN application, including its features, tech stack, project structure, and setup instructions.

🚀 Features

- Responsive UI styled with Tailwind CSS
- Client-side routing using React Router DOM
- Modern data handling with React Router Data APIs (loaders & actions)
- API communication via Axios
- Type-safe data parsing and validation using Zod
- Clean separation of concerns between views, routes, and data logic

🌐 Live Demo

The frontend is deployed and available at:

👉 https://admin-product-frontend-ten.vercel.app/
⚠️ Note: The first load may take a few seconds because the backend is hosted on Render free tier, which can spin down when inactive.

🛠 Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Zod

📂 Project Structure

frontend/
├── public/
├── src/
│ ├── actions/
│ ├── assets/
│ ├── components/
│ ├── layouts/
│ ├── loaders/
│ ├── services/
│ ├── types/
│ ├── utils/
│ ├── views/
│ ├── index.css
│ ├── main.tsx
│ └── router.tsx
├── .env.local
├── index.html
├── package.json
├── README.md
└── vite.config.ts

▶️ Installation & Scripts

Install dependencies - npm install
Development server - npm run dev
Build for production - npm run build

🔗 Backend Integration

The frontend consumes the REST API exposed by the backend service.
Ensure the backend is running and properly configured before starting the frontend.
API requests are handled using Axios, with schema validation performed using Zod before data is rendered or submitted.

🧭 Routing & Data Handling

Routing and data mutations are managed using React Router Data APIs:
Loaders for data fetching
Actions for form submissions and mutations
This approach keeps data logic close to routes and reduces unnecessary state management.