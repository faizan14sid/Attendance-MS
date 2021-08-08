import React, { useState, useEffect } from "react";
import "./sidebar.css";
import axios from 'axios';
import CreateIcon from "@material-ui/icons/Create";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

export const Sidebar = () => {
    const [classList, setClassList] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/class")
            .then((response) => {
                setClassList(response.data)
                console.log(response.data)

            })
            .catch(error => console.error(`Error: ${error}`));
    })




    return (
        <div>
            {classList.map((result, index) => {
                return (
                    <div className="sidebar">
                        <div className="sidebar_header">
                            <div className="sidebar_info">
                                <h2>All Classes</h2>
                            </div>

                        </div>
                        <hr />
                        <h4>{result[1].class}</h4>
                        <hr />
                        <h4>add class <AddIcon /></h4>
                        <hr />
                    </div>
                )

            })}
        </div>
    )

};