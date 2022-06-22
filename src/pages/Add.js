import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { useState } from 'react'
import useLogic from '../hooks/useLogic';
import Navb from './Navb'; 
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
      
const genders = [
  {
      value: 'Man',
      label: 'Man',
  },
  {
      value: 'Woman',
      label: 'Woman',
  },
  {
      value: 'Transgender',
      label: 'Transgender',
  },
  {
      value: 'NonBinary',
      label: 'Non-Binary',
  },
{
  value: 'NoResponse',
  label: 'No Response',
}
];

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Add() {

const {entities} = useLogic();

  const[gender, setGender] = useState('Woman');
  const[name, setName] = useState("");
  const[age, setAge] = useState("");
  const[height, setHeight] = useState("");
  const[weight, setWeight] = useState("");
  const[temperature, setTemperature] = useState("");
  const[pulse, setPulse] = useState("");
  const[pressure, setPressure] = useState("");
  const[respiration, setRespiration] = useState("");
  const[exercise, setExercise] = useState("");
  const[vacation, setVacation] = useState("");
  const[work, setWork] = useState("");
  //married
  //smoke?
  //drink?

const handleChange = (event) => {
    setGender(event.target.value);
};

function handleSubmit(event) {
    event.preventDefault();
    const add = async() => {
      const addEmployee = await entities.employee.add({
        gender: gender ,
        name: name,
        age: parseInt(age),
        height: parseInt(height),
        weight: parseInt(weight),
        temperature: parseInt(temperature),
        pulse: parseInt(pulse),
        pressure: parseInt(pressure),
        respiration: parseInt(respiration),
        exercise: parseInt(exercise),
        vacation: parseInt(vacation),
        work: parseInt(work),
      })
      console.log(addEmployee); 
    }
    add();
}

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
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 4,
                height: '90vh'
              }}
            >
              <TextField
                      id="outlined-select-gender"
                      select
                      label="Gender"
                      onInput={ e=>setGender(e.target.value)}
                      value={gender}
                      onChange={handleChange}
                      helperText="Please select your gender"
                    >
                      {genders.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
        <TextField value={name} onInput={ e=>setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
      <TextField value={age} onInput={ e=>setAge(e.target.value)} id="outlined-basic" label="Age" variant="outlined" />
      <TextField value={height} onInput={ e=>setHeight(e.target.value)} id="outlined-basic" label="Height" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">in</InputAdornment>, }} />
      <TextField value={weight} onInput={ e=>setWeight(e.target.value)} id="outlined-basic" label="Weight" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">lb</InputAdornment>, }}/>
      <TextField value={temperature} onInput={ e=>setTemperature(e.target.value)} id="outlined-basic" label="Temperature" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">f</InputAdornment>, }} />
      <TextField value={pulse} onInput={ e=>setPulse(e.target.value)} id="outlined-basic" label="Pulse" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">bpm</InputAdornment>, }}/>
      <TextField value={pressure} onInput={ e=>setPressure(e.target.value)} id="outlined-basic" label="Pressure" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">mmHg</InputAdornment>, }}/>
      <TextField value={respiration} onInput={ e=>setRespiration(e.target.value)} id="outlined-basic" label="Respiration" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">brpm</InputAdornment>, }}/>
      <TextField value={exercise} onInput={ e=>setExercise(e.target.value)} id="outlined-basic" label="Exercise" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">hrs/wk</InputAdornment>, }}/>
      <TextField value={vacation} onInput={ e=>setVacation(e.target.value)} id="outlined-basic" label="Vacation" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">hrs</InputAdornment>, }} />
      <TextField value={work} onInput={ e=>setWork(e.target.value)} id="outlined-basic" label="Work" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">hrs/wk</InputAdornment>, }} />
            </Box>
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
            <Button sx={{
              }}onClick={handleSubmit} variant="contained">Add</Button>
          </Box>
          </ThemeProvider>
        </Grid>
      ))}    
    </Grid>
  );
}