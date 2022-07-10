import { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    age: Number,
  },
  { timestamps: true }
);

const User = models?.user || model("User", UserSchema);
export default User;
