import React from 'react';
import whatsAppIcon from '../assets/whatsApp.jpg'; // Ruta de WhatsApp
import imgAyuda from '../assets/imgAyuda.jpg'; // Ruta de la imagen de fondo

function Ayuda() {
  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        <div style={styles.helpBox}>
          <h1 style={styles.title}>¿Necesitas Ayuda?</h1>
          <p style={styles.subtitle}>Estamos aquí para asistirte. Si tienes alguna pregunta o necesitas ayuda.</p>
          <p style={styles.text}>
            Por favor contáctanos a través del siguiente correo o nuestro número de teléfono por medio de WhatsApp presionando el icono que aparece debajo del correo electrónico.
          </p>
        </div>
      </div>

      <div style={styles.contactInfo}>
        <p style={styles.email}>
          Correo: <a href="mailto:trejocevallosdaniel@gmail.com" style={styles.emailLink}>trejocevallosdaniel@gmail.com</a>
        </p>
        
        <button style={styles.button} onClick={() => alert('Te conectaremos con un asistente.')}>Contactar Asistente</button>

        {/* Icono de WhatsApp */}
        <div style={styles.whatsAppContainer}>
          <a 
            href="https://wa.me/593985630888" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.whatsAppLink}
          >
            <img 
              src={whatsAppIcon} 
              alt="WhatsApp" 
              style={styles.whatsAppIcon} 
            />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row', // Divide en dos columnas
    alignItems: 'center', // Centra verticalmente
    justifyContent: 'center', // Centra horizontalmente
    minHeight: '100vh',
    backgroundImage: `url(${imgAyuda})`, // Imagen de fondo
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  textSection: {
    flex: 1,
    marginRight: '20px',
    color: '#fff',
    textAlign: 'left', // Alinea el texto hacia la izquierda
  },
  helpBox: {
    backgroundColor: '#fff', // Fondo blanco
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px', // Ancho máximo
    marginBottom: '30px',
  },
  title: {
    fontSize: '4rem', // Aumenta el tamaño del título
    fontWeight: 'bold', // Negrita
    color: '#2c3e50',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '2rem', // Aumenta el tamaño del subtítulo
    fontWeight: 'bold', // Negrita
    color: '#7f8c8d',
    marginBottom: '30px',
  },
  text: {
    fontSize: '1.5rem', // Aumenta el tamaño del texto
    fontWeight: 'bold', // Negrita
    color: '#7f8c8d',
    textAlign: 'left', // Alinea el texto hacia la izquierda
    marginBottom: '40px',
  },
  contactInfo: {
    flex: 1,
    background: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    color: '#333',
    textAlign: 'center', // Centra el contenido de la derecha
    marginLeft: '20px',
  },
  email: {
    fontSize: '2rem', // Aumenta el tamaño del correo
    fontWeight: 'bold', // Negrita
    color: '#3498db',
    marginBottom: '25px',
  },
  emailLink: {
    textDecoration: 'none',
    color: '#3498db',
  },
  button: {
    background: '#001f3f', // Azul marino
    color: '#fff', // Texto en blanco
    fontSize: '1.5rem', // Aumenta el tamaño del botón
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  buttonHover: {
    background: '#2980b9',
  },
  whatsAppContainer: {
    marginTop: '30px',
  },
  whatsAppLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#25D366', // Color verde de WhatsApp
    fontSize: '1.5rem', // Aumenta el tamaño del texto
    fontWeight: 'bold', // Negrita
  },
  whatsAppIcon: {
    width: '50px', // Aumenta el tamaño del icono
    height: '50px',
    marginRight: '15px',
  },
};

export default Ayuda;
