import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../api/authApi";   // ✅ USE API helper instead of axios

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({ username, password });  // ✅ FIXED API CALL

      alert(res.data.message);
      localStorage.setItem("token", res.data.token);

      setIsLoggedIn(true);
      navigate("/manage");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form onSubmit={handleLogin}>
        
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-3"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;
