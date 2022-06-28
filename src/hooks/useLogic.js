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


let totalAge = 0, totalWeight = 0, totalHeight  = 0, totalTemperature  = 0, totalPulse  = 0, totalPressure  = 0, totalRespiration  = 0, totalExercise  = 0, totalVacation  = 0, totalWork = 0;
let maleAge  = 0, maleWeight  = 0, maleHeight  = 0, maleTemperature  = 0, malePulse  = 0, malePressure  = 0, maleRespiration  = 0, maleExercise  = 0, maleVacation  = 0, maleWork = 0;
let femaleAge  = 0, femaleWeight  = 0, femaleHeight  = 0, femaleTemperature  = 0, femalePulse  = 0, femalePressure  = 0, femaleRespiration  = 0, femaleExercise  = 0, femaleVacation  = 0, femaleWork = 0;
let otherAge  = 0, otherWeight  = 0, otherHeight  = 0, otherTemperature  = 0, otherPulse  = 0, otherPressure  = 0, otherRespiration  = 0, otherExercise  = 0, otherVacation  = 0, otherWork = 0;
let maleCount = 0, femaleCount = 0, otherCount = 0;

for (var i = 0; i < length; i++) {
    totalAge += data.items[i].age; totalWeight += data.items[i].weight; totalHeight += data.items[i].height;
    totalTemperature += data.items[i].temperature; totalPulse += data.items[i].pulse; totalPressure += data.items[i].pressure;
    totalRespiration += data.items[i].respiration; totalExercise += data.items[i].exercise; totalVacation += data.items[i].vacation;
    totalWork += data.items[i].work;
    
    if(data.items[i].gender == 'Man'){
      maleAge += data.items[i].age; maleWeight += data.items[i].weight; maleHeight += data.items[i].height;
      maleTemperature += data.items[i].temperature; malePulse += data.items[i].pulse; malePressure += data.items[i].pressure;
      maleRespiration += data.items[i].respiration; maleExercise += data.items[i].exercise; maleVacation += data.items[i].vacation;
      maleWork += data.items[i].work;
      maleCount++;
    }
  
    if(data.items[i].gender == 'Woman'){
      femaleAge += data.items[i].age; femaleWeight += data.items[i].weight; femaleHeight += data.items[i].height;
      femaleTemperature += data.items[i].temperature; femalePulse += data.items[i].pulse; femalePressure += data.items[i].pressure;
      femaleRespiration += data.items[i].respiration; femaleExercise += data.items[i].exercise; femaleVacation += data.items[i].vacation;
      femaleWork += data.items[i].work;
      femaleCount++;
    }
  
    if(data.items[i].gender != "Man" && data.items[i].gender != "Woman"){
      otherAge += data.items[i].age; otherWeight += data.items[i].weight; otherHeight += data.items[i].height;
      otherTemperature += data.items[i].temperature; otherPulse += data.items[i].pulse; otherPressure += data.items[i].pressure;
      otherRespiration += data.items[i].respiration; otherExercise += data.items[i].exercise; otherVacation += data.items[i].vacation;
      otherWork += data.items[i].work;
      otherCount++;
    }
}


var avtotalAge = totalAge/length, avtotalWeight = totalWeight/length, avtotalHeight = totalHeight/length, avtotalTemperature = totalTemperature/length, avtotalPulse = totalPulse/length, avtotalPressure = totalPressure/length, avtotalRespiration = totalRespiration/length, avtotalExercise =  totalExercise/length, avtotalVacation = totalVacation/length, avtotalWork =  totalWork/length;
var avmaleAge = maleAge/maleCount, avmaleWeight = maleWeight/maleCount, avmaleHeight = maleHeight/maleCount, avmaleTemperature = maleTemperature/maleCount, avmalePulse = malePulse/maleCount, avmalePressure = malePressure/maleCount, avmaleRespiration = maleRespiration/maleCount, avmaleExercise = maleExercise/maleCount, avmaleVacation = maleVacation/maleCount, avmaleWork = maleWork/maleCount;
var avfemaleAge = femaleAge/femaleCount, avfemaleWeight = femaleWeight/femaleCount, avfemaleHeight = femaleHeight/femaleCount, avfemaleTemperature = femaleTemperature/femaleCount, avfemalePulse = femalePulse/femaleCount, avfemalePressure = femalePressure/femaleCount, avfemaleRespiration = femaleRespiration/femaleCount, avfemaleExercise = femaleExercise/femaleCount, avfemaleVacation = femaleVacation/femaleCount, avfemaleWork = femaleWork/femaleCount;
var avotherAge = otherAge/otherCount, avotherWeight = otherWeight/otherCount, avotherHeight = otherHeight/otherCount, avotherTemperature = otherTemperature/otherCount, avotherPulse = otherPulse/otherCount, avotherPressure = otherPressure/otherCount, avotherRespiration = otherRespiration/otherCount, avotherExercise = otherExercise/otherCount, avotherVacation = otherVacation/otherCount, avotherWork = otherWork/otherCount;


return {entities, columns, avtotalAge, avtotalWeight, avtotalHeight, avtotalTemperature, avtotalPulse, avtotalPressure, avtotalRespiration, avtotalExercise, avtotalVacation, avtotalWork,
        avmaleAge, avmaleWeight, avmaleHeight, avmaleTemperature, avmalePulse, avmalePressure, avmaleRespiration, avmaleExercise, avmaleVacation, avmaleWork,
        avfemaleAge, avfemaleWeight, avfemaleHeight, avfemaleTemperature, avfemalePulse, avfemalePressure, avfemaleRespiration, avfemaleExercise, avfemaleVacation, avfemaleWork,
        avotherAge, avotherWeight, avotherHeight, avotherTemperature, avotherPulse, avotherPressure, avotherRespiration, avotherExercise, avotherVacation, avotherWork

  
}
}
export default useLogic;

