import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import UpdateSharpIcon from '@mui/icons-material/UpdateSharp';


export default function Home() {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
    >
    <ButtonGroup disableElevation variant="contained">
    <IconButton href="/add" color="success" aria-label="delete" size="small">
        <AddIcon fontSize="inherit" style={{maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
    <IconButton href="/employees" aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" style={{color:'red', maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
    </ButtonGroup>
    <ButtonGroup disableElevation variant="contained">
    <IconButton href="/add" aria-label="delete" size="small">
        <UpdateSharpIcon fontSize="inherit" style={{maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
    <IconButton href="/info" aria-label="delete" size="small">
        <QuestionMarkSharpIcon fontSize="inherit" style={{maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
  </ButtonGroup>
  </Grid>
  )
}

