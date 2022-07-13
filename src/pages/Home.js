import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
// import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import TimelineIcon from '@mui/icons-material/Timeline';
import { createTheme, ThemeProvider} from '@mui/material/styles';


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
      backgroundImage: `url(https://wallpaperaccess.com/full/187161.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: 'absolute',
      top:'0px',
      left:'0px',
      width: '100%',
      height: '100%',
    }}
    >
    <ButtonGroup disableElevation variant="contained">
    <IconButton href="/add" aria-label="add" size="small">
        <AddIcon fontSize="inherit" style={{color: 'rgb(60, 179, 113)', maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
    <IconButton href="/delete" aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" style={{color:'red', maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
      <IconButton href="/aggregate" aria-label="aggregate" size="small">
        <TimelineIcon fontSize="inherit" style={{maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
      <IconButton href="/secondary" aria-label="secondary" size="small">
        <PersonIcon fontSize="inherit" style={{color: 'rgb(0, 0, 255)', maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton>
    {/* <IconButton href="/info" aria-label="info" size="small">
        <QuestionMarkSharpIcon fontSize="inherit" style={{color: 'rgb(255, 218, 51)', maxWidth: '35vh', maxHeight: '35vh', minWidth: '35vh', minHeight: '35vh'}}/>
      </IconButton> */}
    </ButtonGroup>
  </Grid>
  </ThemeProvider>
  )
}