import mongoose from "mongoose";

export const PostSchema = mongoose.Schema({

    caption:{
        type:String,
        required:true

    },
    background:{
        type:String,
        required:false,
        default:"#fffff",
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

},{timestamps:true})

export const Post = mongoose.model("Post",PostSchema)