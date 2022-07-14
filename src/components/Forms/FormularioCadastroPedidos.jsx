import {React, useState} from 'react'

import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// ------------------------------------------------------- //

import axios from '../../services/api';

// ------------------------------------------------------- //


const CadastroPedidosForm = (props) => {

  const [DataHora, setDataHora] = useState('');

  const [Funcionarios, setFuncionarios] = useState(props.funcionarios);
  const [Comandas, setComandas] = useState(props.comandas);
  const [Receitas, setReceitas] = useState(props.receitas);

  const [selectedComandValue, setSelectComandValue] = useState('');
  const [selectedComandInputValue, setSelectedComandInputValue] = useState('');
  
  const nav = useNavigate();

  async function handleNewOrder(e) {


  
    e.preventDefault();

  }

  return (
    <div>
    <h1>Cadastro Pedido</h1>
    <div className={styles.container}>
      <form onSubmit={handleNewOrder}>
        <label>
          <span>Comanda:</span>
          <Autocomplete
            inputValue = {selectedComandInputValue}
            onInputChange = {(e, newValue) => {setSelectedComandInputValue(newValue)}}
            onChange = {(e, newValue) => {setSelectComandValue(newValue)}}
            value = {selectedComandValue}
            getOptionLabel = {(option) => (option.comandaCode)}
            disablePortal
            id="combo-box-demo"
            options={Comandas}
            sx={{ width: 300 }}
            renderInput={(params) => (<TextField {...params} label="Comanda" />)}
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

        <div className={styles.act}>
          <button type="submit" className={styles.btn}>Confirmar Cadastro</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default CadastroPedidosForm; 

