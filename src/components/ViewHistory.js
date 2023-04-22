/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import BaseDefault from '../core/base';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'react-bootstrap';

const ViewHistory = ({history,setHistory,newItem}) => {
  const {id} = useParams();
  const person = history[id];
  console.log(person);

  return (
    <BaseDefault
    styles="title"
    title={`${person.book} Book : Author of ${person.author}`}
    >
      <div className="view-card">
        <img src={person.img}/>
        <p>Book : {person.book}</p>
        <p>Author : {person.author}</p>
        <p>Year : {person.year}</p>
        <p>Description : {person.description}</p>
        <div className="btn-grp">
        <Button onClick={()=>newItem.push("/history")}>Back</Button>
        </div>
      </div>
    </BaseDefault>
  );
}

export default ViewHistory;
