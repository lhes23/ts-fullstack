import mongoose from "mongoose";

const dbConnect = () => {
  if (!process.env.MONGODB_URI) return console.log("No Database selected");
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log(`Database Connected`))
    .catch(() => console.log(`Can't connect to Database`));
};

export default dbConnect;
