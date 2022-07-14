import {React, useState} from 'react'

import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'

// ------------------------------------------------------- //

import axios from '../../services/api';

// ------------------------------------------------------- //


const FormularioCadastroFuncionario = () => {

  const [Name, setName] = useState('');
  const [UrlImagem, setUrlImage] = useState('');
  const [CPF, setCPF] = useState('');
  const [CarteiraTrabalho, setCarteiraTrabalho] = useState('');
  const [Salario, setSalario] = useState('');
  const [DataContratacao, setDataContratacao] = useState('');
  const [Ocupacao, setOcupacao] = useState('');

  const nav = useNavigate();

  async function handleNewUser(e) {

    e.preventDefault();
    
    const funcionario = {
      "nome": Name,
      "cpf": CPF,
      "salario": parseFloat(Salario),
      "carteiraTrabalho":CarteiraTrabalho,
      "dataContratacao": DataContratacao,
      "ocupacao": Ocupacao ,
      "urlImg": UrlImagem
    } 

    

    try {

      const response = await axios.post('/funcionario/', JSON.stringify(funcionario));
      alert("Cadastro concluido!");
      setCPF('');
      setCarteiraTrabalho('');
      setSalario('');
      setDataContratacao('');
      setOcupacao('');

    } catch (error) {
      console.log(error);
      alert('Erro ao cadastrar o funcionário!');

    }


  }

  return (
    <div>
    <h1>Cadastro Funcionario</h1>
    <div className={styles.container}>
      <form onSubmit={handleNewUser}>
       <label>
          <span>Nome:</span>
          <input
            type="text"
            placeholder="Nome do usuário"
            value={Name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
            <span>Foto do funcionário:</span>
              <input 
               type="text"
               placeholder="Url da imagem"
               value={UrlImagem}
               onChange={e => setUrlImage(e.target.value)}
              />
          </label>
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
               type="number"
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