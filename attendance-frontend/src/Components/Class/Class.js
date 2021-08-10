import React from "react";
// import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

export const Class = () => {

    // const { classid } = useParams();
    const location = useLocation();
    const list = location.state.detail;
    // const [classData, setClassData] = useState([]);


    return (
        <div className="class">
            <div className="class_header">

                <div style={{ display: 'flex', justifyContent: "space-around" }}>
                    <h3>Class: {list.standard} Dashboard</h3>
                    <h5 >ClassTeacher: {list.classTeacher}</h5>
                </div>

            </div>
        </div >
    )
}
