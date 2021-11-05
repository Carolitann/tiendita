import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ItemCar() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            TITULO
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore similique quos quis illo officiis libero tempora atque reiciendis molestias? Vel aspernatur voluptates aliquid consectetur nisi voluptatum, doloremque quae totam.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

