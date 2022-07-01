import React from 'react'
import { createVendiaClient } from '@vendia/client';

export default function Secondary() {
const client = createVendiaClient({
    apiUrl: `https://g4xmfntxh1.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://bmunkkqzwc.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'GbvMb5hJ9UpUUoifTfU59k0dXGT9U6kYQVe9Gh3N', // <---- API key
});
const { entities } = client;

console.log("testing");
  return (
    <div>Secondary</div>
  )
}
