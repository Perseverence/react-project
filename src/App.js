import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {id: '1', name: 'BTB', age: 26},
            {id: '2', name: 'Nicu', age: 28},
            {id: '3', name: 'Boby', age: 27}
        ],
        otherState: 'other state',
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            color: 'white',
            border: '1px solid blue',
            padding: "8px",
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>
            )

            style.backgroundColor = 'red';
        }

        const classes = []

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>I'am BTB</h1>
                <p className={classes.join(' ')}>I'am God</p>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, i\'am Valentin!!!'));
    }
}

export default App;
