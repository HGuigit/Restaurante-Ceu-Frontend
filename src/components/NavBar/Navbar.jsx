import React from 'react'

import { NavLink } from 'react-router-dom'

// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Restaurante <span>Exemplo</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink 
            to="/" 
            className={({isActive}) => (isActive ? styles.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className={({isActive}) => (isActive ? styles.active : '')}
          >
            Entrar
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/register" 
            className={({isActive}) => (isActive ? styles.active : '')}
          >
            Cadastrar
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar