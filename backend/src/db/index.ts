import mongoose from "mongoose";

declare var process: {
  env: {
    MONGODB_URI: string;
  };
};

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`Database Connected`))
  .catch(() => console.log(`Can't connect to Database`));
