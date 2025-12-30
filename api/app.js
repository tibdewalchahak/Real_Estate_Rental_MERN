import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express(); // Create an Express application, a request middleware pipeline which is just a controller and no server yet

const allowedOrigin = process.env.CLIENT_URL;
console.log("DATABASE_URL =", process.env.DATABASE_URL);

//now we set a linear pipeline
app.use(cors({ origin: allowedOrigin, credentials: true })); // Enable CORS for requests from http://localhost:3000 with credentials
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cookieParser()); // Middleware to parse cookies from incoming requests

// Define routes for different API endpoints
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// Start the server and listen on port 8800
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});