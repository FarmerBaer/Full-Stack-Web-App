import { Grid, Paper, Avatar, TextField, FormGroup, FormControlLabel, Checkbox, Button, Typography, Link } from '@mui/material'
import KeyIcon from '@mui/icons-material/Key';
import React from 'react'


const preventDefault = (event) => event.preventDefault();
const pStyle = {padding: 0, height: '60vh', width: '50vh', boxShadow: 'none'};
const bStyle = {margin: '8px 0', fontSize: '20px'};

export default function Signin() {

return (
    <Grid sx={{display: 'flex', height: '70vh' , justifyContent: 'center', alignItems: 'center'}} >
        <Paper sx={pStyle}>
            <Grid align="center">
            <Avatar sx={{backgroundColor:'#6300ff', minWidth: '10vh', minHeight: '10vh'}}><KeyIcon sx={{ minWidth: '7vh', minHeight: '7vh'}}/></Avatar>
            <h1>Sign In</h1>
            </Grid>
            <TextField label='Email' placeholder='Email' fullWidth required sx={{margin: '15px 0'}}></TextField>
            <TextField label='Password' placeholder='Enter Password' type='password' fullWidth  required sx={{margin: '15px 0'}}></TextField>
            <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
            </FormGroup>
            <Button type='submit' color='primary' variant='contained' fullWidth sx={bStyle}>Sign In</Button>
            <Typography sx={{margin: '15px 0px 30px 0px'}}>
                <Link href='#' onClick={preventDefault} sx={{textDecoration: 'none', fontSize:'30px'}}>
                    Forgot Password?
                </Link>
            </Typography>
            {/* <Typography>
                <Link href="/Home" sx={{textDecoration: 'none', fontSize:'30px'}}>
                    Sign Up Instead
                </Link>
            </Typography> */}
        </Paper>
    </Grid>
  )
}
