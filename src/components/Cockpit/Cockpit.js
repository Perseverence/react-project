import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {

    const assignedclasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(" ");
    }

    if (props.persons.length <= 2) {
        assignedclasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedclasses.push(classes.bold);
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedclasses.join(' ')}>I'am God</p>
            <button className={btnClass}
                    onClick={props.clicked}>Toggle Persons
            </button>
        </Aux>
    );
};

export default cockpit;