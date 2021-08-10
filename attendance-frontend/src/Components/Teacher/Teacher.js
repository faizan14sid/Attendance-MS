import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useHistory } from 'react-router-dom';
import DialogTitle from '@material-ui/core/DialogTitle';


export const Teacher = () => {
    const [open, setOpen] = useState(false);
    const [teacherName, setTeacherName] = useState("");
    const [registration_no, setRegistration_no] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addTeacher = async () => {

        const res = await fetch('/teacher/registerTeacher', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                teacherName,
                registration_no,
                password

            })
        });
        const data = res.json();

        if (res.status === 422 || !data || !registration_no || !teacherName) {
            window.alert("Invalid teacher or already exist")
        }
        else {
            window.alert("teacher register successfully");
            history.push('/')

        }
        setOpen(false);

    }


    return (
        <div >
            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Teacher Registration
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Register New Teacher </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Teacher Name"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
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
                    <Button onClick={addTeacher} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
