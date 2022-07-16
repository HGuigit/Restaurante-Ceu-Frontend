import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { List, ListItem, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useEffect } from 'react';
import { color } from '@mui/system';


function calculateHeaderMetrics(pedidos, receitas, funcionarios, inicio, fim){
    let somaValorPedidos = 0;
    let somaTotalSalarios = 0;
    let quantidadePedidosFeitos = 0;
    let mediaPedidosFeitosDia = 0;
    
    let mediaAvaliacoes = 0;
    let somaAvaliacoes = 0;

    console.log(pedidos);

    pedidos.forEach((pedido) => {
        if(pedido.dataHora != null){
            if(new Date(pedido.dataHora) > inicio && new Date(pedido.dataHora) < fim){
                quantidadePedidosFeitos += 1;
                somaAvaliacoes +=  pedido.avaliacaoAtendimento
                pedido.receitas.forEach((receita) => {
                    somaValorPedidos += receita.preco
                })
            }
        }
    })

    funcionarios.forEach((funcionarios) => {
        somaTotalSalarios += funcionarios.salario
    })

    mediaPedidosFeitosDia = quantidadePedidosFeitos / (fim.getDay() - inicio.getDay())
    mediaAvaliacoes = parseFloat(somaAvaliacoes / quantidadePedidosFeitos).toFixed(2);

    return {
        somaValorPedidos, 
        somaTotalSalarios,
        quantidadePedidosFeitos,
        mediaPedidosFeitosDia,
        mediaAvaliacoes
    }


}



export default function Relatorio({ data }){

// Estados e variaveis ///////////

let pedidos = data.pedidos;
let receitas = data.receitas;
let funcionarios = data.funcionarios

const [meses, setMeses] = React.useState(1)

let dataAtual = new Date()
dataAtual.setMonth(dataAtual.getMonth() - 1)

const [inicio, setInicio] = React.useState(dataAtual)
const [fim, setFim] = React.useState(new Date())

const [headerMetrics, setHeaderMetrics] = React.useState({});


/////////////////////////////////////////////////////////////////////////////////////////////

useEffect(() => {
    setHeaderMetrics(calculateHeaderMetrics(pedidos, receitas, funcionarios, inicio, fim))
}, [inicio, fim])


const handleChange = (event) => {
    setMeses(event.target.value);

    let periodoInicio = new Date();
    let periodoFim = new Date();
    
    periodoInicio.setMonth(periodoFim.getMonth() - event.target.value)

    setInicio(periodoInicio);
    setFim(periodoFim);

};


return(
    <div style={{display:'flex', flexDirection:"column", justifyContent:'center'}}>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Tempo das métricas</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={meses}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={1}>Este mês</MenuItem>
                <MenuItem value={3}>Ultimos 3 meses</MenuItem>
                <MenuItem value={12}>Último Ano</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Paper elevation={3} sx={{alignSelf:'center', width:"50%", marginTop: 3}}>
            <List>
             <ListItem divider={true} sx={{display:"flex", justifyContent:"space-between"}}>
                    <span >Soma acumulada do valor dos pedidos:</span> 
                    <span style={{marginRight: 25}}>R${parseFloat(headerMetrics.somaValorPedidos)}</span> 
             </ListItem>
             <ListItem divider={true} sx={{display:"flex", justifyContent:"space-between"}}>
                    <span >Quantidade de pedidos feitos:</span> 
                    <span style={{marginRight: 35}}>{headerMetrics.quantidadePedidosFeitos}</span> 
             </ListItem>
             <ListItem divider={true} sx={{display:"flex", justifyContent:"space-between"}}>
                    <span >Média de pedidos feitos por dia:</span> 
                    <span style={{marginRight: 35}}>{headerMetrics.mediaPedidosFeitosDia}</span> 
             </ListItem>
             <ListItem divider={true} sx={{display:"flex", justifyContent:"space-between"}}>
                    <span >Média avaliações:</span> 
                    <span style={{marginRight: 5}}>{headerMetrics.mediaAvaliacoes}/5 <StarIcon sx={{color:'black', fontSize: 15, marginLeft: 0.2, marginTop:1}}/> </span> 
             </ListItem>
             <ListItem divider={true} sx={{display:"flex", justifyContent:"space-between"}}>
                    <span >Soma total do salário dos funcionários contratados:</span> 
                    <span style={{marginRight: 15}}>R${parseFloat(headerMetrics.somaTotalSalarios)}</span> 
             </ListItem>
            </List>
        </Paper>
        

    </div>   
)


}