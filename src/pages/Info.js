import React from 'react'
import Navb from './Navb'
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import TimelineIcon from '@mui/icons-material/Timeline';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Info() {

  return (
    <Grid container spacing={2}>
    {[darkTheme].map((theme, index) => (
      <Grid item xs={12} key={index}>
        <ThemeProvider theme={theme}>
        <Box
          sx={{
            p: 2,
            bgcolor: 'background.default',
            display: 'grid',
            gridTemplateColumns: { md: '1fr' },
            gap: 4,
            height: '5vh'
          }}
        >
          <Navb></Navb>
        </Box>
        <Box
          sx={{
            p: 2,
            bgcolor: 'background.default',
            display: 'grid',
            gridTemplateColumns: { md: '1fr' },
            gap: 4,
            height: '95vh'
          }}
        >
        </Box>
        </ThemeProvider>
        </Grid>
      ))}    
    </Grid>
  )
}

