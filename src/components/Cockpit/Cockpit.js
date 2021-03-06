import React from 'react';
import classes from './Cockpit.css';
import appClasses from "../../container/App.css";

const cockpit = (props) => {
    let btnClass = '';
    const assignedClasses = [];

    if(props.showPerson){
        btnClass= classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>
                {props.title}
            </h1>
            <p className={assignedClasses.join(' ')}>
                This really works !
            </p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >
                Toggle Persons
            </button>
        </div>
    )
}

export default cockpit;