import {React, useState} from 'react'

import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'

// ------------------------------------------------------- //

import axios from '../../services/api';

// ------------------------------------------------------- //


const FormularioCadastroReceita = () => {

  const [Name, setName] = useState('');
  const [Preco, setPreco] = useState('');
  const [Descricao, setDescricao] = useState('');
  // const [Ingredientes, setIngredientes] = useState([]);
  const [TempoPreparo, setTempoPreparo] = useState('');
  const [ImagemReceita, setImagemReceita] = useState('');

  const nav = useNavigate();

  async function handleNewRecipe(e) {

    e.preventDefault();

    const recipe = {
      "nome": Name,
      "descricao":Descricao,
      // "ingredientes":Ingredientes,
      "url":ImagemReceita,
      "tempoPreparoSeg": parseFloat(TempoPreparo) * 60,
      "preco": parseFloat(Preco) 
    } 

  
    try {

      const response = await axios.post('/receita/', JSON.stringify(recipe));
      alert("Cadastro concluido!");
      setName('');
      setPreco('');
      setDescricao('');
      setTempoPreparo('');
      setImagemReceita('');

    } catch {

      alert("Erro ao cadastrar receita");
      
    }

  }

  return (
    <div>
      <h1>Cadastrar Receita</h1>
      <div className={styles.container}>
        <form onSubmit={handleNewRecipe}>
          <label>
            <span>Nome da Receita:</span>
              <input 
              type="text"
              placeholder="Nome da receita"
              value={Name}
              onChange={e => setName(e.target.value)}
              />
          </label>
          <label>
            <span>Preço:</span>
              <input 
              type="number"
              placeholder="Preço da receita"
              value={Preco}
              onChange={e => setPreco(e.target.value)}
              />
          </label>
          <label>
            <span>Tempo de preparo em minutos:</span>
            <input
              type="number"
              placeholder="Tempo de preparo em minutos"
              value={TempoPreparo}
              onChange={e => setTempoPreparo(e.target.value)}
            />
          </label>
          {/* <label>
            <span>Ingredientes:</span>
              <input 
                type="text"
                placeholder="Ingredientes da receita"
                value={Ingredientes}
                onChange={e => setIngredientes(e.target.value)}
              />
          </label> */}
          <label>
            <span>Imagem da Receita:</span>
              <input 
                type="text"
                placeholder="Url da imagem"
                value={ImagemReceita}
                onChange={e => setImagemReceita(e.target.value)}
              />
          </label>
          <label>
            <span>Descrição:</span>
              <input 
                type="text"
                placeholder="Descrição da receita"
                value={Descricao}
                onChange={e => setDescricao(e.target.value)}
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