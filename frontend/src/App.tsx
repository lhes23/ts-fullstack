import React, { useState, useEffect } from "react";
import "./App.css";

interface IUser {
  _id: number;
  name: string;
  age: number;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/users");
      const data = await res.json();
      setUsers(data.users);
      console.log(data.users);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      {users?.map((user) => (
        <li key={user._id}>{user._id}</li>
      ))}
    </div>
  );
}

export default App;
