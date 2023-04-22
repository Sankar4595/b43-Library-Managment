/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BaseDefault from "../../core/base";
import { Button } from "react-bootstrap";

export default function History_Page({history,setHistory,newItem}){

    const delete_list = (idx)=>{
        const alterlist = history.filter((item)=>item.id !==idx);
        setHistory(alterlist);
    }

    return(
        <BaseDefault
            styles="title"
            title="Welcome to History Books"
        >
            <div className="card-body">
                <div className="add-btn">
                    <Button onClick={()=>newItem.push("/addhistory")}>Add New Book</Button>
                </div>
                    {history.map((data,idx)=>{
                        return(
                            <div key={idx} className="card">
                                <img src={data.img}/>
                                <p>Book : {data.book}</p>
                                <p>Author : {data.author}</p>
                                <div className="btn-grp">
                                    <Button onClick={()=>newItem.push(`/book-history/${idx}`)}>View</Button>
                                    <Button onClick={()=>newItem.push(`/edit/history/${data.id}`)}>Edit</Button>
                                    <Button onClick={()=>delete_list(data.id)}>Delete</Button>
                                </div>
                            </div>
                    )})}
                </div>
        </BaseDefault>
    )
}