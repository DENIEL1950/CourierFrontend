import React from 'react';
import imgInOut from '../assets/imgInOut.jpg';

const InOut = () => {
  return (
    <div style={styles.container}>
      {/* Imagen ocupando la mitad superior de la pantalla */}
      <div style={styles.imageContainer}>
        <img 
          src={imgInOut} 
          alt="InOut Service" 
          style={styles.image} 
        />
      </div>

      {/* Sección descriptiva con línea divisoria */}
      <div style={styles.content}>
        <hr style={styles.divider} />
        <h1 style={styles.title}>¿Qué es InOut?</h1>
        <p style={styles.description}>
          InOut es un servicio de courier que ofrece envíos a nivel nacional en Ecuador. 
          Nuestra misión es conectar con clientes, brindando un servicio confiable 
          y accesible para tus necesidades de envío.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  imageContainer: {
    width: '100%',
    height: '75%', // Ocupa la mitad superior de la pantalla
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ajusta la imagen para cubrir el contenedor
  },
  content: {
    textAlign: 'center',
    padding: '20px',
    width: '80%',
  },
  divider: {
    width: '50%',
    border: '1px solid #ccc',
    margin: '20px auto',
  },
  title: {
    fontSize: '2rem',
    color: '#003366',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.5',
  },
};

export default InOut;
