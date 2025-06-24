import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./Connection/Connection.js";

import { handleError } from "./ModelError/ModdleError.js";
import { UserRouter } from "./Router/UserRouter.js";
import cors from "cors";
import { PostRouter } from "./Router/PostRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
ConnectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", UserRouter);
app.use("/api/posts/", PostRouter);

app.use(handleError);
app.listen(process.env.PORT, () =>
  console.log(`server is started ${process.env.PORT.rainbow}`)
);
