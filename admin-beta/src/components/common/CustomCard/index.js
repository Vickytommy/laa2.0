import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CustomCard = ({ course }) => {
  const { title, img, price } = course;
  
  return (
    <>
      <Card sx={{ maxWidth: 275 }}>
        <CardMedia
          component="img"
          alt={title}
          height="200px"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {!price ? 'Free' : `# ${price}`}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CustomCard;
