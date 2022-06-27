import React from 'react'
import Navb from './Navb'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider} from '@mui/material/styles';

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

