import { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';

interface Data {
  message: string;
}

async function Handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const response = await fetch('https://api.codex.gjirafa.tech');
    const data = await response.json();
    console.log(data);
    console.log(response);
    
    
    res.status(200).json({ message: data.message });
  

    
    return (
        <div>
        <h1>{data.id}</h1>
    </div>
  )
  
}
export default Handler;