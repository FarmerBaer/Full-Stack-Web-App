import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import TimelineIcon from '@mui/icons-material/Timeline';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Home() {
  return (
          
    <ThemeProvider theme={darkTheme}>
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
    sx={{
      bgcolor: 'background.default'
    }}
    >
      
    <ButtonGroup disableElevation variant="contained">
    <IconButton href="/add" aria-label="delete" size="small">
        <AddIcon fontSize="inherit" style={{color: 'rgb(60, 179, 113)', maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
    <IconButton href="/employees" aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" style={{color:'red', maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
    </ButtonGroup>
    <ButtonGroup disableElevation variant="contained">
    <IconButton href="/aggregate" aria-label="delete" size="small">
        <TimelineIcon fontSize="inherit" style={{maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
    <IconButton href="/info" aria-label="delete" size="small">
        <QuestionMarkSharpIcon fontSize="inherit" style={{color: 'rgb(0, 0, 255)', maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
  </ButtonGroup>
  </Grid>
  </ThemeProvider>
  )
}

