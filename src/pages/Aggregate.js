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
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Aggregate() {

const [agg, setAgg] = useState(true);

const {avtotalAge, avtotalWeight, avtotalHeight, avtotalTemperature, avtotalPulse, avtotalPressure, avtotalRespiration, avtotalExercise, avtotalVacation, avtotalWork, totalDrinking, totalSmoking, 
      avmaleAge, avmaleWeight, avmaleHeight, avmaleTemperature, avmalePulse, avmalePressure, avmaleRespiration, avmaleExercise, avmaleVacation, avmaleWork, maleDrinking, maleSmoking,
      avfemaleAge, avfemaleWeight, avfemaleHeight, avfemaleTemperature, avfemalePulse, avfemalePressure, avfemaleRespiration, avfemaleExercise, avfemaleVacation, avfemaleWork, femaleDrinking, femaleSmoking,
      avotherAge, avotherWeight, avotherHeight, avotherTemperature, avotherPulse, avotherPressure, avotherRespiration, avotherExercise, avotherVacation, avotherWork, otherDrinking, otherSmoking,
} = useLogic();

const genders = [
  {
    value: 'All',
    label: 'All',
  },
  {
      value: 'Man',
      label: 'Man',
  },
  {
      value: 'Woman',
      label: 'Woman',
  },
  {
      value: 'Other',
      label: 'Other',
  },
];

const handleChangeAgg = () => {
  setAgg(! agg);
};

const handleChangeGender = (event) => {
  setGender(event.target.value);
};
const[gender, setGender] = useState('All');

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
              height: '5vh',
              justifyContent: 'center',
              color: "white"
            }}
          >
        <TextField
                      id="outlined-select-gender"
                      select
                      label="Gender"
                      onInput={ e=>setGender(e.target.value)}
                      value={gender}
                      onChange={handleChangeGender}
                      helperText="Gender to view"
                    >
                      {genders.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
      </Box>
      <Box
            sx={{
              p: 4,
              bgcolor: 'background.default',
              display: 'flex',
              height: '30vh',
              justifyContent: 'space-between',
              color: 'white',
              flexWrap: 'wrap'
            }}
          >
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Age</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avtotalAge}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avmaleAge}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avfemaleAge}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avotherAge}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Height</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avtotalHeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avmaleHeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avfemaleHeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avotherHeight}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Weight</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avtotalWeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avmaleWeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avfemaleWeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avotherWeight}</h1>:<h1 style={{}}></h1>}
            </div>
            </Box>
            <Box
            sx={{
              p: 4,
              bgcolor: 'background.default',
              display: 'flex',
              height: '30vh',
              justifyContent: 'space-between',
              color: 'white',
              flexWrap: 'wrap'
            }}
          >
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Temperature</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avtotalTemperature}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avmaleTemperature}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avfemaleTemperature}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avotherTemperature}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Pulse</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avtotalPulse}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avmalePulse}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avfemalePulse}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avotherPulse}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Pressure</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avtotalPressure}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avmalePressure}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avfemalePressure}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avotherPressure}</h1>:<h1 style={{}}></h1>}
            </div>
            </Box>
            <Box
            sx={{
              p: 4,
              bgcolor: 'background.default',
              display: 'flex',
              height: '30vh',
              justifyContent: 'space-between',
              color: 'white',
              flexWrap: 'wrap'
            }}
          >
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Respiration</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avtotalRespiration}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avmaleRespiration}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avfemaleRespiration}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avotherRespiration}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Exercise</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avtotalExercise}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avmaleExercise}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avfemaleExercise}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avotherExercise}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Vacation</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avtotalVacation}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avmaleVacation}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avfemaleVacation}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avotherVacation}</h1>:<h1 style={{}}></h1>}
            </div>
            </Box>
            <Box
            sx={{
              p: 4,
              bgcolor: 'background.default',
              display: 'flex',
              height: '30vh',
              justifyContent: 'space-between',
              color: 'white',
              flexWrap: 'wrap'
            }}
          >
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Work</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avtotalWork}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avmaleWork}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avfemaleWork}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{avotherWork}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Smoker</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{totalSmoking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{maleSmoking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{femaleSmoking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{otherSmoking}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Drinker</h1>
            {(gender === 'All')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{totalDrinking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{maleDrinking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{femaleDrinking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{paddingTop: "10%", textAlign: 'center'}}>{otherDrinking}</h1>:<h1 style={{}}></h1>}
            </div>
            </Box>
        </ThemeProvider>
      </Grid> 
      }
  </Grid>
  )
}
