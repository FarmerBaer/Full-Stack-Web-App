import React from 'react'
import Navb from './Navb'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useLogic from '../hooks/useLogic';
import { Button } from '@mui/material';
import BarChart from '../charts/BarChart';
import { useState } from 'react';



const darkTheme = createTheme({ palette: { mode: 'dark' } });



export default function Aggregate() {

const {avAge, avWeight, avHeight, avTemperature, avPulse, avPressure, avRespiration, avExercise, avVacation, avWork,
      maleAge, maleWeight, maleHeight, maleTemperature, malePulse, malePressure, maleRespiration, maleExercise, maleVacation, maleWork
} = useLogic();
//s
const age = {
  labels: ["Male","Female","Other"],
  datasets: [
    {
      label: "Age",
      data: [avAge],
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
};

const weight = {
  labels: ["Male","Female","Other"],
  datasets: [
    {
      label: "Weight",
      data: [avAge],
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
};

const height = {
  labels: ["Male","Female","Other"],
  datasets: [
    {
      label: "Height",
      data: [avAge],
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
};

const temperature = {
  labels: ["Male","Female","Other"],
  datasets: [
    {
      label: "Temperature",
      data: [avAge],
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
};

const pulse = {
  labels: ["Male","Female","Other"],
  datasets: [
    {
      label: "Pulse",
      data: [avAge],
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
};

const respiration = {
  labels: ["Male","Female","Other"],
  datasets: [
    {
      label: "Respiration",
      data: [avAge],
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
};

const exercise = {
  labels: ["Male","Female","Other"],
  datasets: [
    {
      label: "Exercise",
      data: [avAge],
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
};
console.log(avAge);
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
              height: '100%',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            <div style={{}}>
            <BarChart chartData={age} />
            </div>
            <div style={{}}>
            <BarChart chartData={weight} />
            </div>
            <div>
            <BarChart chartData={height} />
            </div>
          </Box>
        </ThemeProvider>
      </Grid>
    ))}    
  </Grid>
  )
}
