import React from 'react'
import Navb from './Navb'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Aggregate() {
  return (
    <Grid container spacing={2} >
    {[darkTheme].map((theme, index) => (
      <Grid item xs={12} key={index}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'grid',
              gridTemplateColumns: { md: '1fr' },
              gap: 2,
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
              gap: 2,
              height: '90vh'
            }}
          >
          </Box>
        </ThemeProvider>
      </Grid>
    ))}    
  </Grid>
  )
}
