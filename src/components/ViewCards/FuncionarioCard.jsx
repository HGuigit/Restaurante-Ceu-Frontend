import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function FuncionarioCard ({ funcionarios }) {
  const [workers, setWorkers] = React.useState(funcionarios.data ? funcionarios.data : []);

  return (
      <Grid container spacing={2}>
        {workers.length !== 0 ? 
          workers.map((worker, index) => {
            let data = new Date(worker.dataContratacao)
            return(
            <Grid item xs={3} mb={3} key={index}>
              <Card sx={{ maxWidth: 400, maxHeight: 600 ,boxSizing: 'border-box' }}>
                <CardHeader
                  title={worker.nome}
                  sx={{fontWeight:"bolder"}}
                />
                <CardMedia>
                  <img src={worker.urlImg} height="194" width="245" alt="image not found"/>
                </CardMedia>
                <CardContent>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    CPF: {worker.cpf} 
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Carteira de Trabalho: {worker.carteiraTrabalho} 
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Ocupação: {worker.ocupacao}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Data de Contração: {data.getDay()+1}-{data.getMonth()+1}-{data.getFullYear()}
                  </Typography>
                  <h4>Salário</h4>
                  <Typography paragraph>
                    R${worker.salario}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )})
        : <Grid item xs={12}>
          <h2>Sem funcionários cadastrados!</h2>
        </Grid>
      }
      </Grid>
  );
}
