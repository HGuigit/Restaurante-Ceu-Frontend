import {React, useState} from 'react'

import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'

const FormularioCadastroReceita = () => {

  const [Ingredientes, setIngredientes] = useState('');
  const [TempoPreparo, setTempoPreparo] = useState('');
  const [Preco, setPreco] = useState('');

  const nav = useNavigate();

  async function handleSignIn(e) {

    e.preventDefault();

  }

  return (
    <div>
    <h1>Cadastro Receita</h1>
    <div className={styles.container}>
      <form onSubmit={handleSignIn}>
        <label>
          <span>TempoPreparo:</span>
          <input
            type="time"
            placeholder="Tempo de preparo"
            value={TempoPreparo}
            onChange={e => setTempoPreparo(e.target.value)}
          />
        </label>
        <label>
          <span>Preco:</span>
            <input 
             type="text"
             placeholder="Preço da receita"
             value={Preco}
             onChange={e => setPreco(e.target.value)}
            />
        </label>
        <label>
            <span>Ingredientes:</span>
              <input 
               type="text"
               placeholder="Ingredientes da receita"
               value={Ingredientes}
               onChange={e => setIngredientes(e.target.value)}
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
export default FormularioCadastroReceita