import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { AddClass } from './Class/AddClass';

import { Attendance } from './Attendance/Attendance';
import { ViewAttendance } from './Attendance/ViewAttendance';
import { Class } from './Class/Class';
import { AllTeacher } from './Teacher/AllTeacher';
import { AllStudent } from './Student/AllStudent';
import { ViewStudents } from './Class/ViewStudents';


export const Home = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/addclass'>
                    <AddClass />
                </Route>
                <Route path='/class/view'>
                    <Class />
                </Route>
                <Route path='/viewstudents'>
                    <ViewStudents />
                </Route>

                <Route exact path='/viewallstudents'>
                    <AllStudent />
                </Route>

                <Route path='/viewallteachers'>
                    <AllTeacher />
                </Route>
                <Route path='/takeattendance'>
                    <Attendance />
                </Route>
                <Route path='/viewattendance'>
                    <ViewAttendance />
                </Route>
            </Switch>

        </div>
    )
}
