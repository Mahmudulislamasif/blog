import mongoose from "mongoose";

export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://blog_user:LkDy9lqMctusRuzK@cluster0.vybr26v.mongodb.net/blogs');
    console.log("DB connect");
}