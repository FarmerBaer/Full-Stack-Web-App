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
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avtotalAge}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avmaleAge}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avfemaleAge}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avotherAge}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Height</h1>
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avtotalHeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avmaleHeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avfemaleHeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avotherHeight}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Weight</h1>
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avtotalWeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avmaleWeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avfemaleWeight}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avotherWeight}</h1>:<h1 style={{}}></h1>}
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
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avtotalTemperature}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avmaleTemperature}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avfemaleTemperature}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avotherTemperature}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Pulse</h1>
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avtotalPulse}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avmalePulse}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avfemalePulse}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avotherPulse}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Pressure</h1>
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avtotalPressure}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avmalePressure}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avfemalePressure}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avotherPressure}</h1>:<h1 style={{}}></h1>}
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
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avtotalRespiration}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avmaleRespiration}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avfemaleRespiration}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avotherRespiration}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Exercise</h1>
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avtotalExercise}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avmaleExercise}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avfemaleExercise}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avotherExercise}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Vacation</h1>
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avtotalVacation}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avmaleVacation}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avfemaleVacation}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avotherVacation}</h1>:<h1 style={{}}></h1>}
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
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avtotalWork}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avmaleWork}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avfemaleWork}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{avotherWork}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Smoker</h1>
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{totalSmoking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{maleSmoking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{femaleSmoking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{otherSmoking}</h1>:<h1 style={{}}></h1>}
            </div>
            <div style={{display: 'block',  width: '32%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
            <h1 style={{paddingTop: "10px", color: "#33FF5E", textAlign: 'center'}}>Drinker</h1>
            {(gender === 'All')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{totalDrinking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Man')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{maleDrinking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Woman')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{femaleDrinking}</h1>:<h1 style={{}}></h1>}
            {(gender === 'Other')?<h1 style={{textAlign: 'center', fontSize: '100px'}}>{otherDrinking}</h1>:<h1 style={{}}></h1>}
            </div>
            </Box>
        </ThemeProvider>
      </Grid> 
      }
  </Grid>
  )
}
