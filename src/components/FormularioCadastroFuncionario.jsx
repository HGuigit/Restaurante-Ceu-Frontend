import {React, useState} from 'react'

import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'

const FormularioCadastroFuncionario = () => {

  const [CPF, setCPF] = useState('');
  const [CarteiraTrabalho, setCarteiraTrabalho] = useState('');
  const [Salario, setSalario] = useState('');
  const [DataContratacao, setDataContratacao] = useState('');
  const [Ocupacao, setOcupacao] = useState('');

  const nav = useNavigate();

  async function handleSignIn(e) {

    e.preventDefault();

  }

  return (
    <div>
    <h1>Cadastro Funcionario</h1>
    <div className={styles.container}>
      <form onSubmit={handleSignIn}>
        <label>
          <span>CPF:</span>
          <input
            type="text"
            placeholder="CPF do usuário"
            value={CPF}
            onChange={e => setCPF(e.target.value)}
          />
        </label>
        <label>
          <span>Carteira de Trabalho:</span>
            <input 
             type="text"
             placeholder="Número da carteira de trabalho"
             value={CarteiraTrabalho}
             onChange={e => setCarteiraTrabalho(e.target.value)}
            />
        </label>
        <label>
            <span>Salário:</span>
              <input 
               type="text"
               placeholder="Salario do funcionario"
               value={Salario}
               onChange={e => setSalario(e.target.value)}
              />
          </label>
          <label>
            <span>Data de Contratação:</span>
              <input 
               type="date"
               placeholder="Data de contratação"
               value={DataContratacao}
               onChange={e => setDataContratacao(e.target.value)}
              />
          </label>
          <label>
            <span>Ocupação:</span>
              <input 
               type="text"
               placeholder="Ocupação"
               value={Ocupacao}
               onChange={e => setOcupacao(e.target.value)}
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

export default FormularioCadastroFuncionario