/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BaseDefault from "../../core/base";
import { Button } from "react-bootstrap";

export default function Tamil_Page({tamil,setTamil,newItem}){

    const delete_list = (id) =>{
        const alterlist = tamil.filter(data=>data.id !==id);
        setTamil(alterlist);
    }
    return(
        <BaseDefault
            styles={"title"}
            title={"Welcome to Tamil Books Section"}
        >
            <div className="card-body">
                <div className="add-btn">
                    <Button onClick={()=>newItem.push("/addtamil")}>Add New Book</Button>
                </div>
                {tamil.map((data,idx)=>{
                    return(
                        <div key={idx} className="card">
                            <img src={data.img}/>
                            <p>Book : {data.book}</p>
                            <p>Author : {data.author}</p>
                            <div className="btn-grp">
                                <Button onClick={()=>newItem.push(`/book-tamil/${idx}`)}>View</Button>
                                <Button onClick={()=>newItem.push(`/edit/tamil/${data.id}`)}>Edit</Button>
                                <Button onClick={()=>delete_list(data.id)}>Delete</Button>
                            </div>
                        </div>
                )})}
            </div>            
        </BaseDefault>
    )
}