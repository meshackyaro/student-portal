import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../signup/Signup.module.css";

const Login = ({ users, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setLoggedIn(true);
      navigate("/students");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Need an account? <a href="/">Sign Up</a>
      </p>
    </div>
  );
}

export default Login;
