// export interface IFields {
//   name: string;
//   age: number;
// }

// const tableName: string = "users";

// class User {
//   find() {
//     return `SELECT * FROM ${tableName}`;
//   }

//   create({ name, age }: IFields) {
//     return `INSERT INTO ${tableName} (name, age) VALUES ('${name}','${age}')`;
//   }

//   findById(whereClause: {}) {
//     return `SELECT * FROM ${tableName} WHERE ${Object.keys(whereClause)[0]} = ${
//       Object.values(whereClause)[0]
//     }`;
//   }
// }

// export default User;

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
