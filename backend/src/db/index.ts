import { createConnection } from "mysql";

const con = createConnection({
  host: "localhost",
  user: "nodejs_db",
  password: "",
  database: "nodejs_db",
});

con.connect((err) =>
  err ? console.log(err) : console.log(`Connected to Database`)
);

export default con;
