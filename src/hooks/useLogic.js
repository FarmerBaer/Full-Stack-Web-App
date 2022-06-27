import { createVendiaClient } from '@vendia/client';
import { useState, useEffect} from 'react';

const useLogic = () => {
  
const client = createVendiaClient({
    apiUrl: `https://8vzgpfp6ya.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://auduap6u4f.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'FXKJ6BPTPeyWznWziYe2879vU8CoHaj6TebHhAt478iJ', // <---- API key
});
const { entities } = client;

const columns = [
  {field: 'fname', headerName: 'First Name', width: 130 },
  {field: 'lname', headerName: 'Last Name', width: 130 },
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
  {field: 'smoking', headerName: 'Smoker', width: 105 },
  {field: 'drinking', headerName: 'Drinker', width: 105 },
  {field: 'id', headerName: 'ID', width: 350}
]; 

const [data, setData] = useState();
const [length, setLength] = useState();


useEffect(() => {
      const async = async () => {
      const response = await entities.employee.list();
      setData(response);
      setLength(response.items.length);
    }
    async();
  }, []);


  var rows = [];
  var avAge, avWeight, avHeight, avTemperature, avPulse, avPressure, avRespiration, avExercise, avVacation, avWork = 0;
  var maleAge, maleWeight, maleHeight, maleTemperature, malePulse, malePressure, maleRespiration, maleExercise, maleVacation, maleWork = 0;
  var femaleAge, femaleWeight, femaleHeight, femaleTemperature, femalePulse, femalePressure, femaleRespiration, femaleExercise, femaleVacation, femaleWork = 0;
  var otherAge, otherWeight, otherHeight, otherTemperature, otherPulse, otherPressure, otherRespiration, otherExercise, otherVacation, otherWork = 0;
  
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

      avAge =+ data.items[i].age; avWeight =+ data.items[i].weight; avHeight =+ data.items[i].height;
      avTemperature =+ data.items[i].temperature; avPulse =+ data.items[i].pulse; avPressure =+ data.items[i].pressure;
      avRespiration =+ data.items[i].respiration; avExercise =+ data.items[i].exercise; avVacation =+ data.items[i].vacation;
      avWork =+ data.items[i].work;

      if(data.items[i].gender == 'Man'){
        maleAge =+ data.items[i].age; maleWeight =+ data.items[i].weight; maleHeight =+ data.items[i].height;
        maleTemperature =+ data.items[i].temperature; malePulse =+ data.items[i].pulse; malePressure =+ data.items[i].pressure;
        maleRespiration =+ data.items[i].respiration; maleExercise =+ data.items[i].exercise; maleVacation =+ data.items[i].vacation;
        maleWork =+ data.items[i].work;
      }

      if(data.items[i].gender == 'Woman'){
        femaleAge =+ data.items[i].age; femaleWeight =+ data.items[i].weight; femaleHeight =+ data.items[i].height;
        femaleTemperature =+ data.items[i].temperature; femalePulse =+ data.items[i].pulse; femalePressure =+ data.items[i].pressure;
        femaleRespiration =+ data.items[i].respiration; femaleExercise =+ data.items[i].exercise; femaleVacation =+ data.items[i].vacation;
        femaleWork =+ data.items[i].work;
      }

      if(data.items[i].gender != "Man" && data.items[i].gender != "Woman"){
        otherAge =+ data.items[i].age; otherWeight =+ data.items[i].weight; otherHeight =+ data.items[i].height;
        otherTemperature =+ data.items[i].temperature; otherPulse =+ data.items[i].pulse; otherPressure =+ data.items[i].pressure;
        otherRespiration =+ data.items[i].respiration; otherExercise =+ data.items[i].exercise; otherVacation =+ data.items[i].vacation;
        otherWork =+ data.items[i].work;
      }

      
  }

return {entities, columns, rows, data,
        avAge, avWeight, avHeight, avTemperature, avPulse, avPressure, avRespiration, avExercise, avVacation, avWork,
        maleAge, maleWeight, maleHeight, maleTemperature, malePulse, malePressure, maleRespiration, maleExercise, maleVacation, maleWork,
        femaleAge, femaleWeight, femaleHeight, femaleTemperature, femalePulse, femalePressure, femaleRespiration, femaleExercise, femaleVacation, femaleWork,
        otherAge, otherWeight, otherHeight, otherTemperature, otherPulse, otherPressure, otherRespiration, otherExercise, otherVacation, otherWork,
      }
}

export default useLogic;

