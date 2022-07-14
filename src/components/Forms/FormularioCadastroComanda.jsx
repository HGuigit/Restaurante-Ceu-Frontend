import {React, useState} from 'react'

import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'

// ------------------------------------------------------- //

import axios from '../../services/api';

// ------------------------------------------------------- //

const FormularioCadastroComanda = () => {

  const [Code, setCode] = useState('');
  
  const nav = useNavigate();

  async function handleNewComand(e) {

    e.preventDefault();

    const comanda = {
      "comandaCode": Code,
    } 

    
    try {

      const response = await axios.post('/comanda/', JSON.stringify(comanda));
      alert("Cadastro de comanda concluido!");
      setCode('');

    } catch {

      alert("Erro ao cadastrar comanda!");
      
    }

  }

  return (
    <div>
    <h1>Cadastro Comanda</h1>
    <div className={styles.container}>
      <form onSubmit={handleNewComand}>
        <label>
          <span>Codigo da Comanda:</span>
          <input
            type="text"
            placeholder="Codigo da comanda"
            value={Code}
            onChange={e => setCode(e.target.value)}
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