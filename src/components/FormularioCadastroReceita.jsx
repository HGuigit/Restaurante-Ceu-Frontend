import {React, useState} from 'react'

import styles from './LoginForm.module.css'

import { Link, useNavigate } from 'react-router-dom'

const CadastroFuncionarioForm = () => {

  const [Nome, setNome] = useState('');
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
            type="TempoPreparo"
            placeholder="Tempo de preparo"
            value={TempoPreparo}
            onChange={e => setTempoPreparo(e.target.value)}
          />
        </label>
        <label>
          <span>Preco:</span>
            <input 
             type="Preco"
             placeholder="Preço da receita"
             value={Preco}
             onChange={e => setPreco(e.target.value)}
            />
        </label>
        <label>
            <span>Ingredientes:</span>
              <input 
               type="Ingredientes"
               placeholder="Ingredientes da receita"
               value={Ingredientes}
               onChange={e => setIngredientes(e.target.value)}
              />
          </label>
        
        <div className={styles.act}>
          <button type="submit" className={styles.btn}>Confirmar Cadastro</button>
          <Link to="/" className={styles.btn}> ???? </Link>
        </div>
      </form>
    </div>
  </div>
  )
}
