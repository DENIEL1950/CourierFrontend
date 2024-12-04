import React, { useState } from 'react';
import imgRegister from '../assets/imgRegister.jpg'; // Importa la imagen de fondo

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [pais, setPais] = useState("");
  const [cedula, setCedula] = useState("");
  const [numeroTelefonico, setNumeroTelefonico] = useState("");
  const [direccion, setDireccion] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || password === "") {
      setError(true);
      return;
    }
    // Aquí podrías agregar la lógica para registrar al usuario
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${imgRegister})` }}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Registrar Usuario</h1>
        <form className="register" onSubmit={handleSubmit}>
          <input 
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            style={styles.input}
          />
          <input 
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Apellido"
            style={styles.input}
          />
          <input 
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            placeholder="País"
            style={styles.input}
          />
          <input 
            type="text"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            placeholder="Cédula"
            style={styles.input}
          />
          <input 
            type="text"
            value={numeroTelefonico}
            onChange={(e) => setNumeroTelefonico(e.target.value)}
            placeholder="Número Telefónico"
            style={styles.input}
          />
          <input 
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Dirección"
            style={styles.input}
          />
          <input 
            type="text"
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
            placeholder="Código Postal"
            style={styles.input}
          />
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Registrar</button>
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
    backgroundSize: 'cover', // Asegura que la imagen cubra todo el fondo
    backgroundPosition: 'center', // Centra la imagen
    backgroundRepeat: 'no-repeat', // Evita la repetición de la imagen
  },
  formContainer: {
    background: 'rgba(0, 0, 0, 0.7)', // Fondo semitransparente para el formulario
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
  },  
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#fff',
    fontWeight: 'bold',
  },  
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #00509e',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    background: '#f0f8ff',
  },
  button: {
    background: '#004080',
    color: '#fff',
    fontSize: '1.2rem',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    background: '#00509e',
  },
  errorText: {
    color: '#e74c3c',
    marginTop: '10px',
    fontSize: '1rem',
  },
};

export default Register;
