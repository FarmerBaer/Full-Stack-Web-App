import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useLogic from '../hooks/useLogic';
import Button from '@mui/material/Button';
import Navb from './Navb';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useState} from 'react';
import Box from '@mui/material/Box';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Employees() {

const {columns, isLoading, rows, entities} = useLogic();
const [selectionModel, setSelectionModel] = useState([]);

function handleSubmit(event) {
  event.preventDefault();
  const remove = async() => {
      const removeEmployee = await entities.employee.remove(selectionModel[0]);
      console.log(removeEmployee); 
  }
  remove();
}

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
              height: '95vh'
            }}
          >
          <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableMultipleSelection={true}
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
          {...rows}
            />
            <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'grid',
              gridTemplateColumns: { md: '1fr' },
              gap: 2,
              height: '5vh',
            }}
          >
            <Button sx={{
              }}onClick={handleSubmit} variant="contained">Remove</Button>
          </Box>
          </Box>
        </ThemeProvider>
      </Grid>
    ))}    
  </Grid>
  // <div style={{ height: '100vh'}}>
  //         <Navb></Navb>
  //         <DataGrid
  //         rows={rows}
  //         columns={columns}
  //         checkboxSelection
  //         disableMultipleSelection={true}
  //         onSelectionModelChange={(newSelectionModel) => {
  //           setSelectionModel(newSelectionModel);
  //         }}
  //         selectionModel={selectionModel}
  //         {...rows}
  //           />
  //           {/* <Button onClick={handleSubmit} variant="contained">Remove</Button> */}
            
  //           </div>
      // {/* <Testing></Testing> */}
    );
}