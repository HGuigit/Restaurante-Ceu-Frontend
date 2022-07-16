import {React, useState} from 'react'

import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';


// ------------------------------------------------------- //

import axios from '../../services/api';

// ------------------------------------------------------- //


const CadastroPedidosForm = (props) => {

  const [DataHora, setDataHora] = useState('');
  const [Funcionario, setFuncionario] = useState(null);
  const [Comanda, setComanda] = useState(null);
  const [Receita, setReceita] = useState([]);
  const [Nota, setNota] = useState(0);

  const nav = useNavigate();

  async function handleNewOrder(e) {

    e.preventDefault();

    const order = {
      "funcionarioId" : Funcionario,
      "comanda" : Comanda,
      "receitas" : Receita,
      "dataHora" : DataHora,
      "avaliacaoAtendimento" : Nota
    } 

    try {

      const response = await axios.post('/pedido/', JSON.stringify(order));
      alert("Pedido cadastrado com sucesso!");
      setDataHora('');
      setFuncionario(null);
      setComanda(null);
      setReceita([]);
      setNota(0);

    } catch {

      alert("Erro ao cadastrar pedido!");
      
    }

  }

  return (
    <div>
    <h1>Cadastro Pedido</h1>
    <div className={styles.container}>
      <form onSubmit={handleNewOrder}>
        <label>
          <span>Comanda:</span>
          <Autocomplete
            getOptionLabel={option => option.comandaCode}
            disablePortal
            fullWidth
            id="combo-box-demo"
            options={props.comandas}
            renderInput={(params) => <TextField {...params} label="Comanda" />}
            value={Comanda}
            onChange={(_event, newComand) => {
              setComanda(newComand);
            }}
          />
        </label>
        <label>
          <span>Funcionário:</span>
          <Autocomplete
            getOptionLabel={option => option.nome}
            disablePortal
            fullWidth
            id="combo-box-demo"
            options={props.funcionarios}
            renderInput={(params) => <TextField {...params} label="Funcionário" />}
            value={Funcionario}
            onChange={(_event, newWorker) => {
              setFuncionario(newWorker);
            }}
          />
        </label>
        <label>
          <span>Receita:</span>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={props.receitas}
            getOptionLabel={(option) => option.nome}
            defaultValue={[]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Receitas"
                placeholder="Receitas do pedido"
              />
            )}
            value={Receita}
            onChange={(_event, newRecipe) => {
              setReceita(newRecipe);
            }}
          />
        </label>
        <label>
          <span>Data:</span>
          <input
            type="datetime-local"
            placeholder="Data e Hora"
            value={DataHora}
            onChange={e => setDataHora(e.target.value)}
          />
        </label>
        <label>
          <span>Avaliação do Atendimento:</span>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={Nota}
              onChange={(event, newNota) => {
                setNota(newNota);
              }}
            />  
          </Box>
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

