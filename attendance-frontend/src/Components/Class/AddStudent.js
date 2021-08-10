import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useHistory } from 'react-router-dom';
import DialogTitle from '@material-ui/core/DialogTitle';


export const AddStudent = ({ list }) => {
    const [open, setOpen] = useState(false);
    const [registration_no, setRegistration_no] = useState("");
    const history = useHistory();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addStudent = async () => {

        const res = await fetch('/student/addStudent', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                registration_no,
                standard: list._id

            })
        });
        const data = res.json();

        if (res.status === 422 || !data || !registration_no) {
            window.alert("Invalid student or already exist")
        }
        else {
            window.alert("student added in class successfully");
            history.push('/')

        }
        setOpen(false);

    }


    return (
        <div >
            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Add Student
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Please add student in class </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Student Registration No"
                        value={registration_no}
                        onChange={(e) => setRegistration_no(e.target.value)}
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
