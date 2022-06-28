import React from 'react'
import Navb from './Navb'
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useLogic from '../hooks/useLogic';
import BarChart from '../charts/BarChart';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {useState} from 'react';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Aggregate() {

const [agg, setAgg] = useState(true);

const {avtotalAge, avtotalWeight, avtotalHeight, avtotalTemperature, avtotalPulse, avtotalPressure, avtotalRespiration, avtotalExercise, avtotalVacation, avtotalWork,
      avmaleAge, avmaleWeight, avmaleHeight, avmaleTemperature, avmalePulse, avmalePressure, avmaleRespiration, avmaleExercise, avmaleVacation, avmaleWork,
      avfemaleAge, avfemaleWeight, avfemaleHeight, avfemaleTemperature, avfemalePulse, avfemalePressure, avfemaleRespiration, avfemaleExercise, avfemaleVacation, avfemaleWork,
      avotherAge, avotherWeight, avotherHeight, avotherTemperature, avotherPulse, avotherPressure, avotherRespiration, avotherExercise, avotherVacation, avotherWork
} = useLogic();


const handleChangeAgg = () => {
  setAgg(!agg);
};

const age = {
  labels: ["Total","Male","Female", "Other"],
  datasets: [
    {
      label: "Age",
      data: [avtotalAge, avmaleAge, avfemaleAge, avotherAge],
      backgroundColor: [
        "#219ebc",
        "#ff006e",
        "#fb8500",
        "#8338ec",
      ],
      borderColor: "white",
      borderWidth: 5,
    },
  ],
};

const weight = {
  labels: ["Total","Male","Female", "Other"],
  datasets: [
    {
      label: "Weight",
      data: [avtotalWeight, avmaleWeight, avfemaleWeight, avotherWeight],
      backgroundColor: [
        "#219ebc",
        "#ff006e",
        "#fb8500",
        "#8338ec",
      ],
      borderColor: "white",
      borderWidth: 5,
    },
  ],
};

const height = {
  labels: ["Total","Male","Female", "Other"],
  datasets: [
    {
      label: "Height",
      data: [avtotalHeight, avmaleHeight, avfemaleHeight, avotherHeight],
      backgroundColor: [
        "#219ebc",
        "#ff006e",
        "#fb8500",
        "#8338ec",
      ],
      borderColor: "white",
      borderWidth: 5,
    },
  ],
};

const temperature = {
  labels: ["Total","Male","Female", "Other"],
  datasets: [
    {
      label: "Temperature",
      data: [avtotalTemperature, avmaleTemperature, avfemaleTemperature, avotherTemperature],
      backgroundColor: [
        "#219ebc",
        "#ff006e",
        "#fb8500",
        "#8338ec",
      ],
      borderColor: "white",
      borderWidth: 5,
    },
  ],
};

const pulse = {
  labels: ["Total","Male","Female", "Other"],
  datasets: [
    {
      label: "Pulse",
      data: [avtotalPulse, avmalePulse, avfemalePulse, avotherPulse],
      backgroundColor: [
        "#219ebc",
        "#ff006e",
        "#fb8500",
        "#8338ec",
      ],
      borderColor: "white",
      borderWidth: 5,
    },
  ],
};

const pressure = {
  labels: ["Total","Male","Female", "Other"],
  datasets: [
    {
      label: "Pressure",
      data: [avtotalPressure, avmalePressure, avfemalePressure, avotherPressure],
      backgroundColor: [
        "#219ebc",
        "#ff006e",
        "#fb8500",
        "#8338ec",
      ],
      borderColor: "white",
      borderWidth: 5,
    },
  ],
};

const respiration = {
  labels: ["Total","Male","Female", "Other"],
  datasets: [
    {
      label: "Respiration",
      data: [avtotalRespiration, avmaleRespiration, avfemaleRespiration, avotherRespiration],
      backgroundColor: [
        "#219ebc",
        "#ff006e",
        "#fb8500",
        "#8338ec",
      ],
      borderColor: "white",
      borderWidth: 5,
    },
  ],
};

const exercise = {
  labels: ["Total","Male","Female", "Other"],
  datasets: [
    {
      label: "Exercise",
      data: [avtotalExercise, avmaleExercise, avfemaleExercise, avotherExercise],
      backgroundColor: [
        "#219ebc",
        "#ff006e",
        "#fb8500",
        "#8338ec",
      ],
      borderColor: "white",
      borderWidth: 5,
    },
  ],
};

const vacation = {
  labels: ["Total","Male","Female", "Other"],
  datasets: [
    {
      label: "Vacation",
      data: [avtotalVacation, avmaleVacation, avfemaleVacation, avotherVacation],
      backgroundColor: [
        "#219ebc",
        "#ff006e",
        "#fb8500",
        "#8338ec",
      ],
      borderColor: "white",
      borderWidth: 5,
    },
  ],
};

const work = {
  labels: ["Total","Male","Female", "Other"],
  datasets: [
    {
      label: "Work",
      data: [avtotalWork, avmaleWork, avfemaleWork, avotherWork],
      backgroundColor: [
        "#219ebc",
        "#ff006e",
        "#fb8500",
        "#8338ec",
      ],
      borderColor: "white",
      borderWidth: 5,
    },
  ],
};

  return (
    <Grid container spacing={2} >
      {
        agg?
      <Grid item xs={12}>
        <ThemeProvider theme={darkTheme}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'grid',
              gridTemplateColumns: { md: '1fr' },
              gap: 2,
              height: '5%'
            }}
          >
            <Navb></Navb>
          </Box>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '5vh',
              justifyContent: 'center',
              color: "white"
            }}
          >
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Data Format</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChangeAgg}
      >
        <FormControlLabel value="raw" control={<Radio />} label="Chart" checked />
        <FormControlLabel value="chart" control={<Radio />} label="Raw" />
      </RadioGroup>
    </FormControl>
      </Box>
      <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '50vh',
              justifyContent: 'space-between',
            }}
          >
            <div style={{width: '45%', border: '1px solid white'}}>
            <BarChart chartData={age} />
            </div>
            <div style={{width: '45%', border: '1px solid white'}}>
            <BarChart chartData={weight} />
            </div>
            </Box>
            <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '50vh',
              justifyContent: 'space-between'
            }}
          >
            <div style={{width: '45%', border: '1px solid white'}}>
            <BarChart chartData={height} />
            </div>
            <div style={{width: '45%', border: '1px solid white'}}>
            <BarChart chartData={temperature} />
            </div>
            </Box>
            <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '50vh',
              justifyContent: 'space-between'
            }}
          >
            <div style={{width: '45%', border: '1px solid white'}}>
            <BarChart chartData={pulse} />
            </div>
            <div style={{width: '45%', border: '1px solid white'}}>
            <BarChart chartData={pressure} />
            </div>
            </Box>
            <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '50vh',
              justifyContent: 'space-between'
            }}
          >
            <div style={{width: '45%', border: '1px solid white'}}>
            <BarChart chartData={respiration} />
            </div>
            <div style={{width: '45%', border: '1px solid white'}}>
            <BarChart chartData={exercise} />
            </div>
            </Box>
            <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '50vh',
              justifyContent: 'space-between'
            }}
          >
            <div style={{width: '45%', border: '1px solid white'}}>
            <BarChart chartData={vacation} />
            </div>
            <div style={{width: '45%', border: '1px solid white'}}>
            <BarChart chartData={work} />
            </div>
            </Box>
        </ThemeProvider>
      </Grid> 
        :
        <Grid item xs={12}>
        <ThemeProvider theme={darkTheme}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'grid',
              gridTemplateColumns: { md: '1fr' },
              gap: 2,
              height: '5%'
            }}
          >
            <Navb></Navb>
          </Box>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '5vh',
              justifyContent: 'center',
              color: "white"
            }}
          >
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Data Format</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChangeAgg}
      >
        <FormControlLabel value="raw" control={<Radio />} label="Chart" />
        <FormControlLabel value="chart" control={<Radio />} label="Raw" />
      </RadioGroup>
    </FormControl>
      </Box>
      <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '50vh',
              justifyContent: 'space-between',
              color: 'white'
          
            }}
          >
            <div style={{width: '45%', height: '100%', border: '1px solid white'}}>
            

            </div>
            <div style={{width: '45%', border: '1px solid white'}}>
            
            </div>
            </Box>
            <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '50vh',
              justifyContent: 'space-between'
            }}
          >
            <div style={{width: '45%', border: '1px solid white'}}>
            
            </div>
            <div style={{width: '45%', border: '1px solid white'}}>
            
            </div>
            </Box>
            <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '50vh',
              justifyContent: 'space-between'
            }}
          >
            <div style={{width: '45%', border: '1px solid white'}}>
            
            </div>
            <div style={{width: '45%', border: '1px solid white'}}>
            
            </div>
            </Box>
            <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '50vh',
              justifyContent: 'space-between'
            }}
          >
            <div style={{width: '45%', border: '1px solid white'}}>
            
            </div>
            <div style={{width: '45%', border: '1px solid white'}}>
            
            </div>
            </Box>
            <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'flex',
              height: '50vh',
              justifyContent: 'space-between'
            }}
          >
            <div style={{width: '45%', border: '1px solid white'}}>
            
            </div>
            <div style={{width: '45%', border: '1px solid white'}}>
            
            </div>
            </Box>
        </ThemeProvider>
      </Grid> 
      }
  </Grid>
  )
}
