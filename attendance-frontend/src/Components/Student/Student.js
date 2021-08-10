import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useHistory } from 'react-router-dom';
import DialogTitle from '@material-ui/core/DialogTitle';


export const Student = () => {
    const [open, setOpen] = useState(false);
    const [studentName, setStudentName] = useState("");
    const [registration_no, setRegistration_no] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addStudent = async () => {

        const res = await fetch('/student/registerStudent', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                studentName,
                registration_no,
                password

            })
        });
        const data = res.json();

        if (res.status === 422 || !data || !registration_no || !studentName) {
            window.alert("Invalid student or already exist")
        }
        else {
            window.alert("student register successfully");
            history.push('/')

        }
        setOpen(false);

    }


    return (
        <div >
            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Add New Student
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Register New Student </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Student Name"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="registration_no"
                        label="Registration No"
                        value={registration_no}
                        onChange={(e) => setRegistration_no(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={addStudent} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
