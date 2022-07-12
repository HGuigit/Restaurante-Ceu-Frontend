import {React, useState} from 'react'

import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'

const CadastroPedidosForm = () => {

  const [Comanda, setComanda] = useState('');
  const [ValorTotal, setValorTotal] = useState('');
  const [DataHora, setDataHora] = useState('');
  const [Funcionario, setFuncionario] = useState('');
  
  const nav = useNavigate();

  async function handleSignIn(e) {

    e.preventDefault();

  }

  return (
    <div>
    <h1>Cadastro Pedido</h1>
    <div className={styles.container}>
      <form onSubmit={handleSignIn}>
        <label>
          <span>Comanda:</span>
          <input
            type="text"
            placeholder="Comanda do pedido"
            value={Comanda}
            onChange={e => setComanda(e.target.value)}
          />
        </label>

        <label>
          <span>ValorTotal:</span>
          <input
            type="text"
            placeholder="Valor do pedido"
            value={ValorTotal}
            onChange={e => setValorTotal(e.target.value)}
          />
        </label>

        <label>
          <span>Data:</span>
          <input
            type="datetime-local"
            placeholder="Data e Hora"
            value={DataHora}
            onChange={e => setValorTotal(e.target.value)}
          />
        </label>

        <label>
          <span>Funcionario:</span>
          <input
            type="text"
            placeholder="Funcionario"
            value={Funcionario}
            onChange={e => setValorTotal(e.target.value)}
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

export default CadastroPedidosForm; 