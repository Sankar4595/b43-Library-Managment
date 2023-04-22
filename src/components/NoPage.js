import React from 'react';
import { Button } from 'react-bootstrap';

const NoPage = ({newItem}) => {
  return (
    <div style={{alignItems:"center",textAlign:"center"}}>
        <h1>No Page Error</h1>
        <Button onClick={()=>newItem.push("/")} >Back</Button>
    </div>
  );
}

export default NoPage;
