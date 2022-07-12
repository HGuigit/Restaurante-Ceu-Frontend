import {React, useState} from 'react'

import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'

const FormularioCadastroComanda = () => {

  const [Code, setCode] = useState('');
  
  const nav = useNavigate();

  async function handleSignIn(e) {

    e.preventDefault();

  }

  return (
    <div>
    <h1>Cadastro Comanda</h1>
    <div className={styles.container}>
      <form onSubmit={handleSignIn}>
        <label>
          <span>Codigo da Comanda:</span>
          <input
            type="text"
            placeholder="Codigo da comanda"
            value={Code}
            onChange={e => setIngrediente(e.target.value)}
          />
        </label>
       
        <div className={styles.act}>
          <button type="submit" className={styles.btn}>Confirmar Cadastro</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default FormularioCadastroComanda