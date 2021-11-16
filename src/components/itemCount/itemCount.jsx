import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Icon } from '@mui/material';
import { createMuiTheme } from '@mui/material';
import { green, orange, red } from '@mui/material/colors';


export default function MediaCard() {

  const [count, setCount] = useState (0);

   function updateCount () {
    setCount(count + 1);
  }

  function downdateCount () {
    setCount(count - 1);
  }

  return (
    <Card sx={{ mx:'auto', maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240px"
        image="./itemCount/img/fotoaccesorio1.jpg"
        alt="no me toma la foto"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Piloto
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Piloto color red para tu perro o gato, de excelente calidad para los paseos bajo la lluvia.
        </Typography>
      </CardContent>
      <CardActions sx={{ mx:'auto' }}>
        <Button endIcon={<Icon sx={{ color: green[500], mx:'50px' }}>add_circle</Icon>} size="small" onClick={updateCount}></Button>
        <span >Cantidad: {count}</span>
        <Button endIcon={<Icon sx={{ color: red[500]}}>remove_circle</Icon>} size="small" onClick={downdateCount}></Button>
      </CardActions>
    </Card>
  );
}
