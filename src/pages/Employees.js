import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useLogic from '../hooks/useLogic';
import Button from '@mui/material/Button';

import { useState} from 'react';


export default function Employees() {

const {columns, isLoading, rows, entities} = useLogic();
const [selectionModel, setSelectionModel] = useState([]);

// const Testing = () => {
//     if (isLoading) {
//         return (
//           <div >
//             loading
//         </div>
//         )
//       } else {
//         return (
//           <div style={{ height: 400, width: '100%' }}>
//           <DataGrid
//           rows={rows}
//           columns={columns}
//           checkboxSelection
//           onSelectionModelChange={(newSelectionModel) => {
//             setSelectionModel(newSelectionModel);
//           }}
//           selectionModel={selectionModel}
//           {...rows}
//             />
//             <a href="/">add</a>
//           </div>
//     )}
// }  

function handleSubmit(event) {
  event.preventDefault();
  const remove = async() => {
      const removeEmployee = await entities.employee.remove(selectionModel[0]);
      console.log(removeEmployee); 
  }
  remove();
}

return (
  <div style={{ height: 400, width: '100%' }}>
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
            {/* <Button onClick={handleSubmit} variant="contained">Remove</Button> */}
            <a href="/">add</a>
            </div>
      // {/* <Testing></Testing> */}
    );
}