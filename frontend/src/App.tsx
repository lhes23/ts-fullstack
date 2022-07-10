import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

interface IUser {
  id: number;
  name: string;
  age: number;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/api/users");
      // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setUsers(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      {users?.map((user) => (
        <li key={user.id}>{user.id}</li>
      ))}
    </div>
  );
}

export default App;
