import React from 'react';

function Home({ setUser }) {
  const handleLogout = () => {
    setUser([]); // Lógica para cerrar sesión
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.navContainer}>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Cerrar Sesión
          </button>
        </div>
        <div style={styles.formContainer}>
          <h1 style={styles.title}>Paquetes</h1>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(/src/assets/imgHome.jpg)', // Imagen de fondo
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    width: '100%',
    maxWidth: '1200px',
    padding: '20px',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  },
  logoutButton: {
    background: '#3498db',
    color: '#fff',
    fontSize: '1rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  logoutButtonHover: {
    background: '#2980b9',
  },
  formContainer: {
    background: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#3498db',
    fontWeight: 'bold',
  },
};

export default Home;
