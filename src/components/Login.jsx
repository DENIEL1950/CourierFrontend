import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgLogin from '../assets/imgLogin.jpg'; // Ruta corregida

const Login = ({ setUser }) => {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (correoElectronico === "admin@gmail.com" || password === "admin") {
      setError(true);
      return;
    }
    setError(false);
    setUser([correoElectronico]);
    navigate('/Navbar2');
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${imgLogin})` }}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
            placeholder="Correo Electrónico"
            style={styles.input}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Iniciar sesión</button>
        </form>
        {error && <p style={styles.errorText}>Todos los campos son obligatorios</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  formContainer: {
    background: 'rgba(0, 0, 0, 0.7)',
    padding: '40px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
  },
  title: { fontSize: '2.5rem', marginBottom: '20px', color: '#fff' },
  input: { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '5px' },
  button: { background: '#3498db', color: '#fff', padding: '12px', borderRadius: '5px' },
  errorText: { color: '#e74c3c', marginTop: '10px' },
};

export default Login;
