import React from 'react';
import imgFuncionamiento from '../assets/imgFuncionamiento.jpg'; // Asegúrate de que esta imagen exista

const ComoFunciona = () => {
  return (
    <div style={styles.container}>
      {/* Imagen ocupando la mitad superior de la pantalla */}
      <div style={styles.imageContainer}>
        <img 
          src={imgFuncionamiento} 
          alt="Funcionamiento de InOut" 
          style={styles.image} 
        />
      </div>

      {/* Sección descriptiva con pasos del funcionamiento */}
      <div style={styles.content}>
        <hr style={styles.divider} />
        <h1 style={styles.title}>¿Cómo funciona?</h1>
        <p style={styles.description}>
          En InOut simplificamos el proceso de envío con pasos claros y rápidos:
        </p>
        <ol style={styles.steps}>
          <li>Regístrate en nuestra plataforma para obtener tu cuenta personalizada.</li>
          <li>Genera la etiqueta para tu paquete desde tu panel de usuario.</li>
          <li>Entrega el paquete en el punto de recogida más cercano.</li>
          <li>Rastrea el envío hasta su destino final.</li>
        </ol>
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
    width: '75%',
    height: '60%', // Ocupa la mitad superior de la pantalla
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
  steps: {
    textAlign: 'left',
    margin: '20px auto',
    fontSize: '1rem',
    color: '#444',
    lineHeight: '1.8',
    listStyleType: 'decimal',
    padding: '0 20px',
  },
};

export default ComoFunciona;
