import React, { useState, useEffect } from "react";
import "./sidebar.css";
import axios from 'axios';

import { AddClass } from './AddClass'

export const Sidebar = () => {
    const [classList, setClassList] = useState([]);


    useEffect(() => {

        axios.get("http://localhost:8000/viewClass")
            .then((response) => {
                setClassList(response.data)
                console.log(response.data)
                console.log(classList)
            })
            .catch(error => console.error(`Error: ${error}`));
    }, [])


    return (

        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>All Classes</h2>
                </div>

            </div>

            {classList.map((list, index) => {
                return (

                    <h4> <hr />{list.standard}</h4>
                )
            })}
            <hr />
            <AddClass />
            <hr />


        </div>
    )

};