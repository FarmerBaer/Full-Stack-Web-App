
import { createVendiaClient } from '@vendia/client';
import { useState, useEffect} from 'react';

const useLogic = () => {
  
const client = createVendiaClient({
    apiUrl: `https://f1l9he98b4.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://s4bdcb0sre.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'HGZdrLkmMKyb5A7ReibmA9gie62sQ88cVTd12ZWGMWt7', // <---- API key
});
const { entities } = client;

const columns = [
  {field: 'name', headerName: 'Name', width: 130 },
  {field: 'gender', headerName: 'Gender', width: 105 },
  {field: 'age', headerName: 'Age', type: 'number', width: 105},
  {field: 'weight', headerName: 'Weight', type: 'number', width: 105},
  {field: 'height', headerName: 'Height', type: 'number', width: 105},
  {field: 'temperature', headerName: 'Temperature', type: 'number', width: 105},
  {field: 'pulse', headerName: 'Pulse', type: 'number', width: 105},
  {field: 'pressure', headerName: 'Pressure', type: 'number', width: 105},
  {field: 'respiration', headerName: 'Respiration', type: 'number', width: 105},
  {field: 'exercise', headerName: 'Exercise', type: 'number', width: 105},
  {field: 'vacation', headerName: 'Vacation', type: 'number', width: 105},
  {field: 'work', headerName: 'Work', type: 'number', width: 105},
  {field: 'id', headerName: 'ID', width: 350},
]; 

const [data, setData] = useState();
const [length, setLength] = useState();
const [isLoading, setLoading] = useState(true);



useEffect(() => {
      const async = async () => {
      const response = await entities.employee.list();
      setData(response);
      setLoading(false);
      setLength(response.items.length)
    }
    async()
  }, []);

  var rows = [];
  for (var i = 0; i < length; i++) {
      rows.push({
           name: data.items[i].name, gender: data.items[i].gender, 
           age: data.items[i].age, weight: data.items[i].weight, 
           height: data.items[i].height, temperature: data.items[i].temperature, 
           pulse: data.items[i].pulse, pressure: data.items[i].pressure, 
           respiration: data.items[i].respiration, exercise: data.items[i].exercise, 
           vacation: data.items[i].vacation, work: data.items[i].work, id: data.items[i]._id,
      });
  }

  

return {entities, columns,  isLoading, rows}
}

export default useLogic;

