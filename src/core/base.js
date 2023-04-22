/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function BaseDefault({title,styles,children,newItem}){
    const history = useHistory();

    return(
        <>
            <div className="navbar">
                <Button onClick={()=>history.push("/")}>Home</Button>
                <DropdownButton id="dropdown-basic-button" title="Library">
                    <Button onClick={()=>newItem.push("/economic")}>Economic</Button>
                    <Dropdown.Item onClick={()=>newItem.push("/economic")}>Economic</Dropdown.Item>
                    <Dropdown.Item onClick={()=>newItem.push("/history")}>History</Dropdown.Item>
                    <Dropdown.Item onClick={()=>newItem.push("/tamil")}>Tamil</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className={styles}>{title}</div>
            <div className="main-body">{children}</div>
        </>
    )
}