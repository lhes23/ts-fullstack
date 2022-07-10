import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import UsersList from "./components/UsersList";
import { IUser } from "./utils/interfaces";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/users");
      const data = await res.json();
      setUsers(data.users);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Link to="/">Home</Link>
      <UsersList users={users} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:_id" element={<UserDetails users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
