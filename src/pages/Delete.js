import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useLogic from '../hooks/useLogic';
import Button from '@mui/material/Button';
import Navb from './Navb';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import ClipLoader from "react-spinners/ClipLoader";

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Employees() {

const {entities, columns} = useLogic();

const [loading, setLoading] = useState(false);
const [selectionModel, setSelectionModel] = useState([]);
const [data, setData] = useState();
const [length, setLength] = useState();

const remove = async() => {
  setLoading(true);
  const removeEmployee = await entities.employee.remove(selectionModel[0]);
  setLoading(false);
}

function handleSubmitRemove(event) {
  event.preventDefault();
  remove();
}

useEffect(() => {
  const async = async () => {
    const response = await entities.employee.list();
    setData(response);
    setLength(response.items.length);
  }
  async();
}, [loading]);


var rows = [];
for (var i = 0; i < length; i++) {
    rows.push({
         fname: data.items[i].fname, lname: data.items[i].lname, gender: data.items[i].gender, 
         age: data.items[i].age, weight: data.items[i].weight, 
         height: data.items[i].height, temperature: data.items[i].temperature, 
         pulse: data.items[i].pulse, pressure: data.items[i].pressure, 
         respiration: data.items[i].respiration, exercise: data.items[i].exercise, 
         vacation: data.items[i].vacation, work: data.items[i].work, id: data.items[i]._id, 
         smoking: data.items[i].smoking, drinking: data.items[i].drinking,
});
}
 
return (
  <Grid container spacing={2} >
    {
      loading?
      <Grid item xs={12}>
        <ThemeProvider theme={darkTheme}>
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
          display="flex"
          justifyContent="center"
          alignItems="center"
            sx={{
              p: 2,
              bgcolor: 'background.default',
              gridTemplateColumns: { md: '1fr' },
              gap: 2,
              height: '95vh'
            }}
          >
          <ClipLoader color={'blue'} loading={loading}  size={150} />
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
          sx={{
            bgcolor: 'background.default',
            height: '600px'
          }}
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
            <Button color="error" onClick={handleSubmitRemove} variant="contained">Remove</Button>
          </Box>
          </Box>
        </ThemeProvider>
      </Grid>
    } 
  </Grid>
    );
}