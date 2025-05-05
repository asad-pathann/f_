import express from "express"
import { addPost } from "../Controll/ControllPost.js"

export const PostRouter = express.Router()

PostRouter.post('/post-add',addPost)