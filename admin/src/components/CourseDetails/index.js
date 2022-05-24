import { Grid, TextField, Typography, Rating } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import CustomAccordion from '../common/CustomAccordion';
import { Container } from '@mui/material';
const CourseDetails = () => {
  let { id } = useParams();

  return (
    <>
    <div style={{positive: 'absolute !important', backgroundColor: '#000', width: '100%', height: 400}}></div>
    <Container>
      <Typography variant='h3' component='h1'>Course Title</Typography>
      <TextField
        id="title" 
        label="Title" 
        variant="standard" 
        fullWidth
        helperText=""
      />
      <TextField 
        id="Description" 
        label="Description"
        variant="standard"
        fullWidth 
        multiline 
        maxRows={4}
        helperText="Limit to 150 characters!"
      />
      
      <Rating value={3.6} precision={.1} readOnly />
      <Typography variant='h4' component='h2'>Course content</Typography>

      <Grid container spacing={2}>
        <Grid item md={6}>
          <CustomAccordion title={"Programming fundamentals"} extra={"10 lectures 40mins"} />
        </Grid>
        <Grid item md={6}>

        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default CourseDetails;
