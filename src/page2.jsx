import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Tambahkan useNavigate
import './page2.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Inisialisasi useNavigate untuk navigasi

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Misalnya, jika email dan password valid, lakukan pengalihan
    // Di sini bisa ditambahkan logika autentikasi atau pengecekan
    if (email && password) {
      // Mengalihkan ke halaman "App.jsx"
      navigate('/');  // Navigasi ke halaman utama setelah login
    } else {
      // Tampilkan pesan error jika email atau password kosong
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Welcome to Estilo Petshop! 🐾</h2>
          <p>Your pet’s favorite place!</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="login-button">Login 🐶</button>
        </form>
        <div className="login-footer">
          <p>Don’t have an account? <Link to="/signup">Sign up now</Link> 🐱</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
