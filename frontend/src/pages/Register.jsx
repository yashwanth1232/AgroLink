import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../api/authApi";   // ✅ Use our API helper

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser({ username, password }); // ✅ FIXED

      alert(res.data.message);
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <form onSubmit={handleRegister}>

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
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;
