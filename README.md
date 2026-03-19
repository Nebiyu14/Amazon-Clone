# Amazon React Clone

A full‑stack Amazon‑style storefront built with React + Vite on the frontend and two interchangeable backend options for Stripe payments:
1. Express + Node.js (REST API)
2. Firebase Functions (serverless)

This project is under active development, and features will continue to evolve.

**Live URLs**
1. Frontend (Vercel): [View Website](https://amazon-clone-xi-one.vercel.app)
2. Backend Option A (Render): [Express Backend Server](https://amazon-clone-6ugt.onrender.com)

**Tech Stack**
1. React 19 + Vite
2. React Router
3. Firebase Auth (client)
4. Stripe Payments
5. Express 5 (backend option A)
6. Firebase Functions (backend option B)
7. Material UI + Emotion
8. Fake Store API (product data)

**Project Structure**
1. `ClientSide/` – React frontend
2. `backendExpress/` – Express API for Stripe payments
3. `backendFirebase/` – Firebase Functions API for Stripe payments

**Prerequisites**
1. Node.js 18+ for frontend and Express backend
2. Node.js 18+ for Firebase Functions 
3. npm (or pnpm/yarn)
4. Stripe account + keys
5. Firebase CLI (only if using Firebase Functions)

**Frontend Setup**
1. `cd ClientSide`
2. `npm install`
3. Create `ClientSide/.env`:
```env
VITE_STRIPE_PUBLIC_KEY=pk_test_your_key_here
VITE_BACKEND_BASE_URL=http://localhost:3000
VITE_FRONTEND_BASE_URL=http://localhost:5173
```
4. `npm run dev`

**Backend Option A: Express**
1. `cd backendExpress`
2. `npm install`
3. Create `backendExpress/.env`:
```env
STRIPE_SECRET_KEY=sk_test_your_key_here
PORT=3000
```
4. `npm start`

The API exposes:
1. `GET /` – health check
2. `POST /payment` – create Stripe PaymentIntent (expects `{ total }`)

**Backend Option B: Firebase Functions**
1. `cd backendFirebase/functions`
2. `npm install`
3. Create `backendFirebase/functions/.env`:
```env
STRIPE_SECRET_KEY=sk_test_your_key_here
```
4. Run emulator: `npm run serve`
5. Or deploy: `npm run deploy`

For the emulator, set `VITE_BACKEND_BASE_URL` to:
`http://localhost:5001/<your-project-id>/us-central1/api`

For deployed functions, use your functions URL:
`https://us-central1-<your-project-id>.cloudfunctions.net/api`

**Notes**
1. Product data is fetched from `https://fakestoreapi.com`.
2. Firebase client config currently lives in `ClientSide/src/firebase/firebase.js`.

**Scripts**
1. Frontend: `npm run dev`, `npm run build`, `npm run preview`
2. Express API: `npm start`
3. Firebase Functions: `npm run serve`, `npm run deploy`
