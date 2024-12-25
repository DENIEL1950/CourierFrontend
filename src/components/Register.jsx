import React, { useState } from 'react';
import imgRegister from '../assets/imgRegister.jpg'; // Importa la imagen de fondo
import { registerUser } from '../services/api';

const Register = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [direccion, setDireccion] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [provincia, setProvincia] = useState("");


  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if (!nombres || !apellidos || !cedula || !nombreUsuario || !direccion || 
        !codigoPostal || !telefono || !password || !email || !pais || 
        !ciudad || !provincia) {
      setError(true);
      return;
    }

    try {
      const userData = {
        nombres,
        apellidos,
        cedula,
        nombreUsuario,
        direccion,
        codigoPostal,
        telefono,
        password,
        email,
        pais,
        ciudad,
        provincia
      };

      console.log('Intentando enviar datos:', userData);
      const response = await registerUser(userData);
      console.log('Respuesta exitosa:', response);
      alert('Usuario registrado con éxito!');
      
    } catch (error) {
      console.log('Error detallado:', error.response || error);
      alert('Error al registrar: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${imgRegister})` }}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Registrar Usuario</h1>
        <form className="register" onSubmit={handleSubmit}>
          <input 
            type="text"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            placeholder="Nombre de Usuario"
            style={styles.input}
          />
          <input 
            type="text"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            placeholder="Nombres "
            style={styles.input}
          />
          <input 
            type="text"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            placeholder="Apellidos"
            style={styles.input}
          />
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
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
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
            placeholder="Provincia"
            style={styles.input}
          />
          <input 
            type="text"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            placeholder="Ciudad"
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
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
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
