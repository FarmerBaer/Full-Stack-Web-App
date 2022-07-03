import React from 'react'
import { createVendiaClient } from '@vendia/client';

export default function Secondary() {
const client = createVendiaClient({
    apiUrl: `https://ag080rlvra.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://msr0t88ci5.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'DZ8azfGSux3bh5jQ4bn6N4GD5VmHDBqpyTKWQyNHougt', // <---- API key
});
const { entities } = client;

const async = async () => {
    const response = await entities.employee.list();
    console.log(response);
}
async();

  return (
    <div>Secondary</div>
  )
}
