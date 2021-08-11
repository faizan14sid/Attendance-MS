import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'



export const Attendance = ({ list }) => {
    const [open, setOpen] = useState(false);
    const [teacher, setTeacher] = useState("");

    const history = useHistory();
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const attendance = () => {
        fetch('/attendance/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                teacher,
                standard: list._id
            })
        }).then(res => res.json())
            .then(data => {
                localStorage.setItem("attData", JSON.stringify(data));
                if (data.error) {
                    window.alert("Invalid credentials")
                    history.push('/');
                }
                else {
                    history.push({ pathname: "/takeattendance", state: { detail: list } });
                }
            })

    }

    return (
        <div>
            <Button variant="warning" onClick={handleOpen}>
                Take Attendance
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Enter Teacher Name for Attendance </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Teacher Name"
                        value={teacher}
                        onChange={(e) => setTeacher(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={attendance} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
