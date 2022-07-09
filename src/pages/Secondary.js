import React from 'react'
import { createVendiaClient } from '@vendia/client';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
// import ClipLoader from "react-spinners/ClipLoader";
import Navb from './Navb';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState, useEffect} from 'react';

export default function Secondary() {
const client = createVendiaClient({
    apiUrl: `https://ag080rlvra.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://msr0t88ci5.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'DZ8azfGSux3bh5jQ4bn6N4GD5VmHDBqpyTKWQyNHougt', // <---- API key
});
const { entities } = client;

const [data, setData] = useState();
const [length, setLength] = useState();
console.log(data);
useEffect(() => {
  const async = async () => {
      const response = await entities.employee.list();
      setData(response);
      setLength(response.items.length);
}
  async();
  
}, []);



const Redacted = () => {

  var indents = [];
  for (var i = 0; i < length; i++) {
    let dangerCount = 0;
    let dangerous = false;
    if(data.items[i].weight > 200){
      dangerCount++;
    }
    if(data.items[i].temperature > 98){
      dangerCount++;
    }
    if(data.items[i].pulse > 90){
      dangerCount++;
    }
    if(data.items[i].pressure > 95){
      dangerCount++;
    }
    if(data.items[i].respiration > 75){
      dangerCount++;
    }
    if(data.items[i].exercise < 15){
      dangerCount++;
    }
    if(data.items[i].smoker === 'Yes'){
      dangerCount++;
    }
    if(data.items[i].drinker === 'Yes'){
      dangerCount++;
    }
    if(dangerCount > 2){
      dangerous = true;
    }
    indents.push(
      <Box
            key={i}
            sx={{
              p: 4,
              bgcolor: 'background.default',
              display: 'flex',
              height: '50vh',
              justifyContent: 'space-between',
              color: 'white',
              flexWrap: 'wrap'
            }}
          >
      {
        (dangerous === false)?
        <div style={{display: 'block',  width: '100%', height: '100%', border: '1px solid white', color: 'white', justifyContent: 'center'}}>
        <h1 style={{display: 'flex', paddingTop: '20px' ,  width: '100%', height: '20%', color: 'white', justifyContent: 'center'}}>
        <AccountCircleIcon sx={{minWidth: '10vh', minHeight: '10vh' }}></AccountCircleIcon>
        </h1>
        <h1 style={{display: 'flex',  width: '100%', height: '20%',  color: 'white', justifyContent: 'center', fontSize: '30px'}}>
        {data.items[i]._id}
        </h1>
        <h1 style={{display: 'flex',  width: '100%', height: '20%', color: 'white', justifyContent: 'center'}}>
        {`Employee fails ${dangerCount} out of 8 health checks`}
        </h1>
        </div>
        :
        <div style={{display: 'block',  width: '100%', height: '100%', border: '3px solid red', color: 'white', justifyContent: 'center'}}>
        <h1 style={{display: 'flex', paddingTop: '20px' ,  width: '100%', height: '20%', color: 'white', justifyContent: 'center'}}>
        <AccountCircleIcon sx={{minWidth: '10vh', minHeight: '10vh' }}></AccountCircleIcon>
        </h1>
        <h1 style={{display: 'flex',  width: '100%', height: '20%',  color: 'white', justifyContent: 'center', fontSize: '30px'}}>
        {data.items[i]._id}
        </h1>
        <h1 style={{display: 'flex',  width: '100%', height: '20%', color: 'white', justifyContent: 'center'}}>
        {`Employee fails ${dangerCount} out of 8 health checks`}
        </h1>
        </div>
      }
      </Box>
      );
  }

  return (
    <div>
     {indents}
    </div>
  )
}



const darkTheme = createTheme({ palette: { mode: 'dark' } });

  return (
    <Grid container spacing={2}>
    {
       <Grid item xs={12}>
        <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            p: 2,
            bgcolor: 'background.default',
            display: 'flex',
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
              color: 'white'
            }}
          >
            <Redacted></Redacted>
          </Box>
        </ThemeProvider>
      </Grid> 
    }
  </Grid>
  )
}
