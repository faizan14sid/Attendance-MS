import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Table } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';




export const ViewAttendance = () => {

    const [classList, setClassList] = useState([])
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {

        axios.get("http://localhost:8000/class/viewClass")
            .then((response) => {
                setClassList(response.data)
                console.log(response.data)

            })
            .catch(error => console.error(`Error: ${error}`));
    }, [])



    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleOpen}>
                View Attendance
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Please Select Class </DialogTitle>
                {classList.map((list, index) => {
                    return (
                        <div style={{ textAlign: "center" }}>
                            <Button variant="outlined" color="secondary">
                                <Link style={{ textDecoration: "inherit", color: "inherit" }} to={{ pathname: "/showattendance", state: { detail: list } }}>
                                    {list.standard}
                                </Link>
                            </Button><hr />
                        </div>
                    )
                })}
                <DialogActions>
                    <Button variant="contained" onClick={handleClose} color="secondary">
                        Cancel
                    </Button>

                </DialogActions>
            </Dialog>

        </div >
    )
}
