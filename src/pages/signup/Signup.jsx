import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Signup.module.css'

const Signup = ({ users, setUsers }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   const handleSign = () =>{
//     navigate("/login");
//   }

  const handleSignup = () => {
    // e.preventDefault();
    // setUsers([...users, { fullName, email, age, sex, password }]);
    navigate("/login");
  };

  return (
    <div className={styles.formContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="fullName"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="sex"
          placeholder="Sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a href="/login">
          <button onClick={handleSignup} type="submit">Sign Up</button>
        </a>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;
