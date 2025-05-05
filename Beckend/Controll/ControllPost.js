import { Post } from "../Model/Post.js";

export  const addPost=async (req,res)=>{
    const {
        background,
        caption,
    }=req.body

     const {user_id} = req.params;

    const newPost  = await Post.create({
        caption,background,user_id
    })
    res.send(newPost)
}