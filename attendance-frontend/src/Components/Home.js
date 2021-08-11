import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { AddClass } from './Class/AddClass';
import { ViewTeachers } from './Class/ViewTeachers';
import { Class } from './Class/Class';
import { AllTeacher } from './Teacher/AllTeacher';
import { AllStudent } from './Student/AllStudent';
import { ViewStudents } from './Class/ViewStudents';
import { TakeAttendance } from './Class/TakeAttendance';
import { ShowAttendance } from './Attendance/ShowAttendance';


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
                <Route exact path='/viewstudents'>
                    <ViewStudents />
                </Route>
                <Route path='/showattendance'>
                    <ShowAttendance />
                </Route>
                <Route path='/viewteachers'>
                    <ViewTeachers />
                </Route>
                <Route exact path='/viewallstudents'>
                    <AllStudent />
                </Route>

                <Route path='/viewallteachers'>
                    <AllTeacher />
                </Route>
                <Route path='/takeattendance'>
                    <TakeAttendance />
                </Route>
            </Switch>

        </div>
    )
}
