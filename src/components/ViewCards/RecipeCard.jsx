import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function RecipeReviewCard({ receitas }) {
  const [recipes, setRecipes] = React.useState(receitas.data ? receitas.data : []);

  console.log(recipes.length);

  return (
      <Grid container spacing={2}>
        {recipes.length !== 0 ? 
          recipes.map((recipe, index) => (
            <Grid item xs={3} mb={3} key={index}>
              <Card sx={{ maxWidth: 400, maxHeight: 600 ,boxSizing: 'border-box' }}>
                <CardHeader
                  title={recipe.nome}
                  sx={{fontWeight:"bolder"}}
                />
                <CardMedia>
                  <img src={recipe.url} height="194" width="245" alt="recipe thumbnail"/>
                </CardMedia>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Tempo de preparo: {Math.floor(recipe.tempoPreparoSeg / 60)} min
                  </Typography>
                  <Typography variant="body2" color="text.secondary" marginTop="5px">
                    Preço: R${recipe.preco}
                  </Typography>
                </CardContent>
                <CardContent>
                  <h3>Descrição</h3>
                  <Typography paragraph>
                    {recipe.descricao}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        : <Grid item xs={12}>
          <h2>Sem receitas cadastradas!</h2>
        </Grid>
      }
      </Grid>
  );
}
