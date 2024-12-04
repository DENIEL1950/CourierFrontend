import { Link } from 'react-router-dom';
import React from 'react';

const Links = [
  {
    name: "CÓMO FUNCIONA",
    href: "/ComoFunciona"
  },
  {
    name: "COTIZAR",
    href: "/Cotizar"
  },
  {
    name: "INICIAR SESIÓN",
    href: "/Login"
  },
  {
    name: "REGISTRARSE",
    href: "/Register"
  },
  {
    name: "AYUDA",
    href: "/Ayuda"
  }
];

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/InOut" style={styles.title}>InOut</Link> {/* Cambiado a Link */}
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
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    background: 'linear-gradient(90deg, #001f3f, #003366)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '0 0 20px 20px',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1000',
    height: '70px',
  },
  title: {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    textDecoration: 'none', // Asegura que no tenga subrayado
  },
  linkContainer: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '10px 15px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  linkHover: {
    background: 'rgba(255, 255, 255, 0.4)',
    transform: 'scale(1.1)',
  },
};

export default Navbar;
