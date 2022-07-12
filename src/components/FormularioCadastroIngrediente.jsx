import {React, useState} from 'react'

import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'

const FormularioCadastroIngrediente = () => {

  const [Nome, setNome] = useState('');
  
  const nav = useNavigate();

  async function handleSignIn(e) {

    e.preventDefault();

  }

  return (
    <div>
    <h1>Cadastro Ingrediente</h1>
    <div className={styles.container}>
      <form onSubmit={handleSignIn}>
        <label>
          <span>Nome do ingrediente:</span>
          <input
            type="text"
            placeholder="Nome do ingrediente"
            value={Nome}
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

export default FormularioCadastroIngrediente