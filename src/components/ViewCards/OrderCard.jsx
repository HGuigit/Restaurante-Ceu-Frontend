import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function OrderCard ({ pedidos }) {
  const [orders, setOrders] = React.useState(pedidos.data ? pedidos.data : []);

  return (
      <Grid container spacing={2}>
        {orders.length !== 0 ? 
          orders.map((order, index) => {
            let somaPedido = 0;
            let data = new Date(order.dataHora)
            return(
            <Grid item xs={3} mb={3} key={index}>
              <Card sx={{ maxWidth: 400, height: 400 ,boxSizing: 'border-box' }}>
                <CardHeader
                  title={'Pedido ' + index}
                  sx={{fontWeight:"bolder"}}
                />
                <CardContent>
                  <div style={{display:'flex', flexDirection:'column', justifyContent:"space-evenly", flex:1}}>
                    <div>
                    <Typography variant="body2" color="text.secondary" mb={1}>
                      Comanda: {order.comanda.comandaCode} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={1}>
                      Funcionário: {order.funcionarioId.nome} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={1}>
                      Data do Pedido: {data.getDay()+1}-{data.getMonth()+1}-{data.getFullYear()} / {data.getHours()}:{data.getMinutes()}
                    </Typography>
                    </div>
                    <div>
                    <h4>Receitas:</h4>
                    <Typography component={'span'}>
                      {order.receitas.map((pedido, index) => {
                        somaPedido = somaPedido + pedido.preco;
                        return(
                            <p key={index}>{pedido.nome}</p>
                        )
                      })}
                    </Typography>
                    </div>
                    <div>
                      <Typography fontWeight='bold'>Valor do pedido: R${parseFloat(somaPedido)}</Typography> 
                    </div>
                  </div>

                </CardContent>
              </Card>
            </Grid>
          )})
        : <Grid item xs={12}>
          <h2>Sem pedidos cadastrados!</h2>
        </Grid>
      }
      </Grid>
  );
}
