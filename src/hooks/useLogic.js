import { createVendiaClient } from '@vendia/client';
import { useState, useEffect} from 'react';

const useLogic = () => {
  
const client = createVendiaClient({
    apiUrl: `https://pnl9ipk5b0.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://qo25dfnlta.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'GK39HYXgFiu6NipjqUGTftMSu3jZRds3VBicyqFEzeH2', // <---- API key
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
  var avAge, avWeight, avHeight, avTemperature, avPulse, avPressure, avRespiration, avExercise, avVacation, avWork = 0;
  var maleAge, maleWeight, maleHeight, maleTemperature, malePulse, malePressure, maleRespiration, maleExercise, maleVacation, maleWork = 0;
  for (var i = 0; i < length; i++) {
      rows.push({
           name: data.items[i].name, gender: data.items[i].gender, 
           age: data.items[i].age, weight: data.items[i].weight, 
           height: data.items[i].height, temperature: data.items[i].temperature, 
           pulse: data.items[i].pulse, pressure: data.items[i].pressure, 
           respiration: data.items[i].respiration, exercise: data.items[i].exercise, 
           vacation: data.items[i].vacation, work: data.items[i].work, id: data.items[i]._id,
      });

      avAge =+ data.items[i].age; avWeight =+ data.items[i].weight; avHeight =+ data.items[i].height;
      avTemperature =+ data.items[i].avTemperature; avPulse =+ data.items[i].avPulse; avPressure =+ data.items[i].avPressure;
      avRespiration =+ data.items[i].avRespiration; avExercise =+ data.items[i].avExercise; avVacation =+ data.items[i].avVacation;
      avWork =+ data.items[i].avWork;

      if(data.items[i].gender == 'Man'){
        maleAge =+ data.items[i].age; maleWeight =+ data.items[i].weight; maleHeight =+ data.items[i].height;
        maleTemperature =+ data.items[i].maleTemperature; malePulse =+ data.items[i].avPulse; malePressure =+ data.items[i].avPressure;
        maleRespiration =+ data.items[i].maleRespiration; maleExercise =+ data.items[i].avExercise; maleVacation =+ data.items[i].avVacation;
        maleWork =+ data.items[i].avWork;
      }

      
  }

return {entities, columns, isLoading, rows, data, avAge, avWeight, 
        avHeight, avTemperature, avPulse, avPressure, avRespiration, avExercise, avVacation, avWork,
        maleAge, maleWeight, maleHeight, maleTemperature, malePulse, malePressure, maleRespiration, maleExercise, maleVacation, maleWork
      }
}

export default useLogic;

