import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log("[Persons.js] Inside Constructor", props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log("[Persons.js] Inside componentWillMount()");
    }

    componentDidMount() {
        console.log("[Persons.js] Inside componentDidMount()");
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log("[UPDATE Persons.js] Inside componentWillReceiveProps()", nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log("[UPDATE Persons.js] Inside shouldComponentUpdate()", nextProps);
    //     console.log('nextProps.persons = ', nextProps.persons);
    //     console.log('this.props.persons = ', this.props.persons);
    //     return nextProps.persons !== this.props.persons;
    // }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("[UPDATE Persons.js] Inside componentWillUpdate()", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[UPDATE Persons.js] Inside componentDidUpdate()", prevProps, prevState);
    }

    render() {
        console.log("[Persons.js] Inside render()");
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                position={index}
                age={person.age}
                ref={this.lastPersonRef}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
        });
    }
}

export default Persons;