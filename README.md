# Trello Management app

 Trello Management app is mern stack Task Management Application built with **Next.js** for the frontend and **Node.js** with **Express** and **MongoDB** for the backend. The application allows users to register, log in, and manage tasks with features such as creating, updating, deleting, and retrieving tasks.

## Features

- User registration and authentication
- Create, read, update, and delete tasks
- Task categorization with status and priority
- Responsive design for mobile and desktop

## Images 
<img width="1792" alt="Screenshot 2024-07-31 at 12 18 36 AM" src="https://github.com/user-attachments/assets/621429d8-e8d7-4abd-b130-8bd3ef7d3a62">

<img width="1788" alt="Screenshot 2024-07-31 at 12 18 03 AM" src="https://github.com/user-attachments/assets/1b48654e-00ba-4c67-8ea5-52785884237b">

<img width="1791" alt="Screenshot 2024-07-31 at 12 18 09 AM" src="https://github.com/user-attachments/assets/6eb61e5a-502e-4b4d-b654-50f2a10b55aa">

### Backend Setup

1. **Cd into the folder**:

   ```bash
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the `backend` directory and add the following environment variables:

   ```plaintext
   PORT=8080
   MONGODB_URI=YOUR_MONGODBURL
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_jwt_secret` with a secure secret key.

4. **Start the backend server**:

   ```bash
   npm run dev
   ```

   The backend server will run on `http://localhost:8080`.


### Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env.local` file** in the `frontend` directory and add the following environment variable:

   ```plaintext
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
   ```

4. **Start the frontend server**:

   ```bash
   npm run dev
   ```

   The frontend application will run on `http://localhost:3000`.

