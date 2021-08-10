import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useHistory } from 'react-router-dom';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddIcon from "@material-ui/icons/Add";

export const AddClass = () => {
    const [open, setOpen] = useState(false);
    const [standard, setStandard] = useState("");
    const [classTeacher, setClassTeacher] = useState("");
    const history = useHistory();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addClass = async () => {

        const res = await fetch('/class/addClass', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                standard,
                classTeacher
            })
        });
        const data = res.json();

        if (res.status === 422 || !data || !standard) {
            window.alert("Invalid class or already exist")
        }
        else {
            window.alert("class added successfully");
            history.push('/')

        }
        setOpen(false);

    }


    return (
        <div >
            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Add class <AddIcon />
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Add class and class teacher name</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="class"
                        value={standard}
                        onChange={(e) => setStandard(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Class Teacher"
                        value={classTeacher}
                        onChange={(e) => setClassTeacher(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={addClass} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
