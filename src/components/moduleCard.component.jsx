import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ModuleCard({title, description, image, id}) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 400, boxShadow:5, mb:1 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent sx={{height:200}}>
        <Typography  gutterBottom variant="h5" component="div">
          {id + ": " + title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Open</Button>
      </CardActions>
    </Card>
  );
}
