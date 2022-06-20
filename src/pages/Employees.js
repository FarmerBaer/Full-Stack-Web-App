import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useLogic from '../hooks/useLogic';


export default function Employees() {

const {columns, isLoading, rows} = useLogic();
    
const Testing = () => {
    if (isLoading) {
        return (
          <div >
            loading
        </div>
        )
      } else {
        return (
          <DataGrid
          rows={rows}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[5]}
          checkboxSelection/>
    )}
}    

return (
    <div style={{ height: 400, width: '100%' }}>
      <Testing></Testing>
      <a href="/">Add</a>
    </div>
    );
}