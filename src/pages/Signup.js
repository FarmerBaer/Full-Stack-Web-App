import { Grid, Paper, Avatar, TextField, FormGroup, FormControlLabel, Checkbox, Button, Typography, Link } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import React from 'react'
import { useRef } from 'react';


const preventDefault = (event) => event.preventDefault();
const pStyle = {padding: 0, height: '60vh', width: '50vh', boxShadow: 'none'};
const bStyle = {margin: '8px 0', fontSize: '20px'};

export default function Signup() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const cPasswordRef = useRef();

return (
    <Grid sx={{display: 'flex', height: '70vh', justifyContent: 'center', alignItems: 'center'}} >
        <Paper sx={pStyle}>
            <Grid align="center">
            <Avatar sx={{backgroundColor:'#00f1ff', minWidth: '10vh', minHeight: '10vh'}}><CreateIcon sx={{ minWidth: '7vh', minHeight: '7vh'}}/></Avatar>
            <h1>Sign Up</h1>
            </Grid>
            <TextField inputRef={emailRef}      label='Email'             placeholder='Enter Email'     fullWidth  required                   sx={{margin: '15px 0'}}></TextField>
            <TextField inputRef={passwordRef}   label='Password'          placeholder='Enter Password'  fullWidth  required type='password'   sx={{margin: '15px 0'}}></TextField>
            <TextField inputRef={cPasswordRef}  label='Confirm Password'  placeholder='Enter Password'  fullWidth  required type='password'   sx={{margin: '15px 0'}}></TextField>
            <Button type='submit' color='primary' variant='contained' fullWidth sx={bStyle}>Sign Up</Button>
            {/* <Typography sx={{margin: '15px 0px 30px 0px'}}>
                <Link href='/' sx={{textDecoration: 'none', fontSize: '30px'}}>
                    Sign In Instead
                </Link>
            </Typography> */}
        </Paper>
    </Grid>
  )
}
