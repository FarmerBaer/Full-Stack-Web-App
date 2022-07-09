import { createVendiaClient } from '@vendia/client';
import { useState, useEffect} from 'react';

const useLogic = () => {
  
const client = createVendiaClient({
    apiUrl: `https://i21sdh9oha.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://vog584wc2c.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'J7CCs8P1BTFkZg9VuvtKqybvEVXQXTwPrjvoDPpAbLdo', // <---- API key
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
let maleAge  = 0, maleWeight  = 0, maleHeight  = 0, maleTemperature  = 0, malePulse  = 0, malePressure  = 0, maleRespiration  = 0, maleExercise  = 0, maleVacation  = 0, maleWork = 0, maleSmoking = 0, maleDrinking = 0;
let femaleAge  = 0, femaleWeight  = 0, femaleHeight  = 0, femaleTemperature  = 0, femalePulse  = 0, femalePressure  = 0, femaleRespiration  = 0, femaleExercise  = 0, femaleVacation  = 0, femaleWork = 0, femaleSmoking = 0, femaleDrinking = 0;
let otherAge  = 0, otherWeight  = 0, otherHeight  = 0, otherTemperature  = 0, otherPulse  = 0, otherPressure  = 0, otherRespiration  = 0, otherExercise  = 0, otherVacation  = 0, otherWork = 0, otherSmoking = 0, otherDrinking = 0;
let maleCount = 0, femaleCount = 0, otherCount = 0;

for (var i = 0; i < length; i++) {
    totalAge += data.items[i].age; totalWeight += data.items[i].weight; totalHeight += data.items[i].height;
    totalTemperature += data.items[i].temperature; totalPulse += data.items[i].pulse; totalPressure += data.items[i].pressure;
    totalRespiration += data.items[i].respiration; totalExercise += data.items[i].exercise; totalVacation += data.items[i].vacation;
    totalWork += data.items[i].work; 

    
    if(data.items[i].gender === 'Man'){
      maleAge += data.items[i].age; maleWeight += data.items[i].weight; maleHeight += data.items[i].height;
      maleTemperature += data.items[i].temperature; malePulse += data.items[i].pulse; malePressure += data.items[i].pressure;
      maleRespiration += data.items[i].respiration; maleExercise += data.items[i].exercise; maleVacation += data.items[i].vacation;
      maleWork += data.items[i].work; 
      if(data.items[i].smoking === 'Yes'){
        maleSmoking++;
      }
      if(data.items[i].drinking === 'Yes'){
        maleDrinking++;
      }
      maleCount++;
    }
  
    if(data.items[i].gender === 'Woman'){
      femaleAge += data.items[i].age; femaleWeight += data.items[i].weight; femaleHeight += data.items[i].height;
      femaleTemperature += data.items[i].temperature; femalePulse += data.items[i].pulse; femalePressure += data.items[i].pressure;
      femaleRespiration += data.items[i].respiration; femaleExercise += data.items[i].exercise; femaleVacation += data.items[i].vacation;
      femaleWork += data.items[i].work; 
      if(data.items[i].smoking === 'Yes'){
        femaleSmoking++;
      }
      if(data.items[i].drinking === 'Yes'){
        femaleDrinking++;
      }
      femaleCount++;
    }
  
    if(data.items[i].gender !== "Man" && data.items[i].gender !== "Woman"){
      otherAge += data.items[i].age; otherWeight += data.items[i].weight; otherHeight += data.items[i].height;
      otherTemperature += data.items[i].temperature; otherPulse += data.items[i].pulse; otherPressure += data.items[i].pressure;
      otherRespiration += data.items[i].respiration; otherExercise += data.items[i].exercise; otherVacation += data.items[i].vacation;
      otherWork += data.items[i].work;
      if(data.items[i].smoking === 'Yes'){
        otherSmoking++;
      }
      if(data.items[i].drinking === 'Yes'){
        otherDrinking++;
      }
      otherCount++;
    }
    
}

var totalSmoking  = (maleSmoking   + femaleSmoking   + otherSmoking);
var totalDrinking = (maleDrinking  + femaleDrinking  + otherDrinking);
var avtotalAge1   = totalAge/length,        avtotalWeight1  = totalWeight/length,         avtotalHeight1   = totalHeight/length,        avtotalTemperature1   = totalTemperature/length,        avtotalPulse1   = totalPulse/length,        avtotalPressure1  = totalPressure/length,         avtotalRespiration1   = totalRespiration/length,        avtotalExercise1  =  totalExercise/length,        avtotalVacation1  = totalVacation/length,         avtotalWork1  =  totalWork/length;
var avmaleAge1    = maleAge/maleCount,      avmaleWeight1   = maleWeight/maleCount,       avmaleHeight1    = maleHeight/maleCount,      avmaleTemperature1    = maleTemperature/maleCount,      avmalePulse1    = malePulse/maleCount,      avmalePressure1   = malePressure/maleCount,       avmaleRespiration1    = maleRespiration/maleCount,      avmaleExercise1   = maleExercise/maleCount,       avmaleVacation1   = maleVacation/maleCount,       avmaleWork1   = maleWork/maleCount;
var avfemaleAge1  = femaleAge/femaleCount,  avfemaleWeight1 = femaleWeight/femaleCount,   avfemaleHeight1 = femaleHeight/femaleCount,   avfemaleTemperature1  = femaleTemperature/femaleCount,  avfemalePulse1  = femalePulse/femaleCount,  avfemalePressure1 = femalePressure/femaleCount,   avfemaleRespiration1  = femaleRespiration/femaleCount,  avfemaleExercise1 = femaleExercise/femaleCount,   avfemaleVacation1 = femaleVacation/femaleCount,   avfemaleWork1 = femaleWork/femaleCount;
var avotherAge1   = otherAge/otherCount,    avotherWeight1  = otherWeight/otherCount,     avotherHeight1  = otherHeight/otherCount,     avotherTemperature1   = otherTemperature/otherCount,    avotherPulse1   = otherPulse/otherCount,    avotherPressure1  = otherPressure/otherCount,     avotherRespiration1   = otherRespiration/otherCount,    avotherExercise1  = otherExercise/otherCount,     avotherVacation1  = otherVacation/otherCount,     avotherWork1  = otherWork/otherCount;

var avtotalAge  = Math.trunc(avtotalAge1),  avtotalWeight   = Math.trunc(avtotalWeight1),   avtotalHeight   = Math.trunc(avtotalHeight1),    avtotalTemperature  = Math.trunc(avtotalTemperature1),   avtotalPulse   = Math.trunc(avtotalPulse1),   avtotalPressure  = Math.trunc(avtotalPressure1),  avtotalRespiration   = Math.trunc(avtotalRespiration1),   avtotalExercise  =  Math.trunc(avtotalExercise1),     avtotalVacation   = Math.trunc(avtotalVacation1),   avtotalWork   =   Math.trunc(avtotalWork1);
var avmaleAge   = Math.trunc(avmaleAge1),   avmaleWeight    = Math.trunc(avmaleWeight1),    avmaleHeight    = Math.trunc(avmaleHeight1),     avmaleTemperature   = Math.trunc(avmaleTemperature1),    avmalePulse    = Math.trunc(avmalePulse1),    avmalePressure   = Math.trunc(avmalePressure1),   avmaleRespiration    = Math.trunc(avmaleRespiration1),    avmaleExercise   =  Math.trunc(avmaleExercise1),      avmaleVacation    = Math.trunc(avmaleVacation1),    avmaleWork    =   Math.trunc(avmaleWork1);
var avfemaleAge = Math.trunc(avfemaleAge1), avfemaleWeight  = Math.trunc(avfemaleWeight1),  avfemaleHeight  = Math.trunc(avfemaleHeight1),   avfemaleTemperature = Math.trunc(avfemaleTemperature1),  avfemalePulse  = Math.trunc(avfemalePulse1),  avfemalePressure = Math.trunc(avfemalePressure1), avfemaleRespiration  = Math.trunc(avfemaleRespiration1),  avfemaleExercise =  Math.trunc(avfemaleExercise1),    avfemaleVacation  = Math.trunc(avfemaleVacation1),  avfemaleWork  =   Math.trunc(avfemaleWork1);
var avotherAge  = Math.trunc(avotherAge1),  avotherWeight   = Math.trunc(avotherWeight1),   avotherHeight   = Math.trunc(avotherHeight1),    avotherTemperature  = Math.trunc(avotherTemperature1),   avotherPulse   =  Math.trunc(avotherPulse1),  avotherPressure  = Math.trunc(avotherPressure1),  avotherRespiration   = Math.trunc(avotherRespiration1),   avotherExercise  =  Math.trunc(avotherExercise1),     avotherVacation   = Math.trunc(avotherVacation1),   avotherWork   =   Math.trunc(avotherWork1);

return {entities, columns, avtotalAge, avtotalWeight, avtotalHeight, avtotalTemperature, avtotalPulse, avtotalPressure, avtotalRespiration, avtotalExercise, avtotalVacation, avtotalWork, totalSmoking, totalDrinking,
        avmaleAge, avmaleWeight, avmaleHeight, avmaleTemperature, avmalePulse, avmalePressure, avmaleRespiration, avmaleExercise, avmaleVacation, avmaleWork, maleSmoking, maleDrinking,
        avfemaleAge, avfemaleWeight, avfemaleHeight, avfemaleTemperature, avfemalePulse, avfemalePressure, avfemaleRespiration, avfemaleExercise, avfemaleVacation, avfemaleWork, femaleSmoking, femaleDrinking,
        avotherAge, avotherWeight, avotherHeight, avotherTemperature, avotherPulse, avotherPressure, avotherRespiration, avotherExercise, avotherVacation, avotherWork, otherSmoking, otherDrinking 
}
}
export default useLogic;

