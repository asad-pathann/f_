import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./Connection/Connection.js";

import { handleError } from "./ModelError/ModdleError.js";
import { UserRouter } from "./Router/UserRouter.js";
import cors from "cors";
import { PostRouter } from "./Router/PostRoutes.js";
import http from "http";
// 1. FIX: "socket-io" ko badal kar "socket.io" kiya
import { Server } from "socket.io";

dotenv.config();
const app = express();

const my_server = http.createServer(app);

const io = new Server(my_server, {
  cors: {
    origin: "*",
    // 2. FIX: "Method" ko badal kar lowercase "methods" kiya
    methods: ["POST", "GET", "PUT", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log(`socket connected ${socket.id.cyan}`);
});

app.use(cors());
ConnectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", UserRouter);
app.use("/api/posts/", PostRouter);

// 3. FIX: "my_server.use" nahi hota, "app.use" hota hai error middleware ke liye
app.use(handleError);

// 4. FIX: "app.listen" ki jagah "my_server.listen" use karein taaki Socket.io chal sake
my_server.listen(process.env.PORT, () =>
  console.log(`server is started ${process.env.PORT}`.green),
);
