import mongoose, { mongo } from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    // console.log(process.env.MONGODB_URL);
    await mongoose.connect("mongodb+srv://sabit:khan@cluster0.idtcygq.mongodb.net/?retryWrites=true&w=majority"
      // process.env.MONGODB_URL
      ,
       {
      dbName: "share_prompt",
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error, "errorSAbit");
  }
};
