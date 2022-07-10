export interface IFields {
  name: string;
  age: number;
}

const tableName: string = "users";

class User {
  find() {
    return `SELECT * FROM ${tableName}`;
  }

  create({ name, age }: IFields) {
    return `INSERT INTO ${tableName} (name, age) VALUES ('${name}','${age}')`;
  }

  findById(whereClause: {}) {
    return `SELECT * FROM ${tableName} WHERE ${Object.keys(whereClause)[0]} = ${
      Object.values(whereClause)[0]
    }`;
  }
}

export default User;
