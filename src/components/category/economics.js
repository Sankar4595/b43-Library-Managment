/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BaseDefault from "../../core/base";
import { Button } from "react-bootstrap";

export default function Economics_Page({eco,setEco,newItem}){
    
    const delete_list =(idx) =>{
        const alter_list = eco.filter((item)=>item.id !== idx)
        setEco(alter_list);
    }
    return(
        <BaseDefault
            styles="title"
            title="Welcome to Economics Books"
        >    
            <div className="card-body">
                <div className="add-btn">
                    <Button onClick={()=>newItem.push("/addeconomic")}>Add New Book</Button>
                </div>
                    {eco.map((data,idx)=>{
                        return(
                            <div key={idx} className="card">
                                <img src={data.img}/>
                                <p>Book : {data.book}</p>
                                <p>Author : {data.author}</p>
                                <div className="btn-grp">
                                    <Button onClick={()=>newItem.push(`/book-economic/${idx}`)}>View</Button>
                                    <Button onClick={()=>newItem.push(`/edit/economic/${data.id}`)}>Edit</Button>
                                    <Button onClick={()=>delete_list(data.id)}>Delete</Button>
                                </div>
                            </div>
                    )})}
                </div>
        </BaseDefault>
    )
}