import { Link } from 'react-router-dom';
import React from 'react';


const Links = [
    {
      name: "Mi perfil",
      href: "/MiPerfil"
    },
    {
      name: "HOME",
      href: "/Home"
    },
    {
      name: "Mis paquetes",
      href: "/MisPaquetes"
    },
    {
      name: "Alertar paquetes",
      href: "/AlertarPaquetes"
    },
    {
      name: "Mi Dirección",
      href: "/MiDireccion"
    },
    {
      name: "Formas de pago",
      href: "/FormaPago"
    },
    {
      name: "Crear Ticket",
      href: "/CrearTicket"
    },
    {
      name: "Salir",
      href: "/Salir"
    }
  ];
  
  const Navbar2 = () => {
    return (
      <nav style={styles.navbar2}>
        <h1 style={styles.title}>InOut</h1>
        
        <div style={styles.linkContainer}>
          {Links.map((x, index) => (
            <Link key={index} to={x.href} style={styles.link}>
              {x.name}
            </Link>
          ))}
        </div>
      </nav>
    );
  };
  
  const styles = {
    navbar2: {
      display: 'flex',
      flexDirection: 'column', // Alinea los elementos en columna
      alignItems: 'flex-start', // Alinea los elementos a la izquierda
      justifyContent: 'flex-start', // Alinea los elementos al principio
      padding: '20px',
      background: 'linear-gradient(90deg, #001f3f, #003366)', // Cambiado a tonos de azul marino
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '0 0 20px 20px',
      position: 'fixed', // Fija la barra de navegación en el lado izquierdo
      top: '0',
      left: '0',
      height: '100vh', // Asegura que la barra ocupe toda la altura de la pantalla
      width: '250px', // Ajusta el tamaño de la barra lateral
    },
    title: {
      color: '#fff',
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    },
    linkContainer: {
      display: 'flex',
      flexDirection: 'column', // Asegura que los enlaces estén en columna
      gap: '20px',
      marginTop: '20px', // Añade espacio arriba de los enlaces
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      padding: '10px 15px',
      borderRadius: '8px',
      background: 'rgba(255, 255, 255, 0.2)', // Fondo translúcido para los enlaces
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    linkHover: {
      background: 'rgba(255, 255, 255, 0.4)',
      transform: 'scale(1.1)',
    },
  };
  
  export default Navbar2;