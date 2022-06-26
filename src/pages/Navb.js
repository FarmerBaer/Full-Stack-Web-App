import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import TimelineIcon from '@mui/icons-material/Timeline';
import CottageIcon from '@mui/icons-material/Cottage';

export default function Navb() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton href="/" aria-label="delete" size="small">
        <CottageIcon fontSize="inherit" style={{color: 'rgb(200, 20, 100)', maxWidth: '5vh', maxHeight: '5vh', minWidth: '5vh', minHeight: '5vh'}}/>
      </IconButton>
        <IconButton href="/add" aria-label="delete" size="small">
        <AddIcon fontSize="inherit" style={{color: 'rgb(60, 179, 113)', maxWidth: '5vh', maxHeight: '5vh', minWidth: '5vh', minHeight: '5vh'}}/>
      </IconButton>
      <IconButton href="/employees" aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" style={{color:'red', maxWidth: '5vh', maxHeight: '5vh', minWidth: '5vh', minHeight: '5vh'}}/>
      </IconButton>
    <IconButton href="/aggregate" aria-label="delete" size="small">
        <TimelineIcon fontSize="inherit" style={{maxWidth: '5vh', maxHeight: '5vh', minWidth: '5vh', minHeight: '5vh'}}/>
      </IconButton>
    <IconButton href="/info" aria-label="delete" size="small">
        <QuestionMarkSharpIcon fontSize="inherit" style={{color: 'rgb(0, 0, 255)', maxWidth: '5vh', maxHeight: '5vh', minWidth: '5vh', minHeight: '5vh'}}/>
      </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
