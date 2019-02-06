import React, {PureComponent} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log("[App.js] Inside Constructor", props);
        this.state = {
            persons: [
                {id: '1', name: 'BTB', age: 26},
                {id: '2', name: 'Nicu', age: 28},
                {id: '3', name: 'Boby', age: 27}
            ],
            otherState: 'other state',
            showPersons: false
        }
    }

    componentWillMount() {
        console.log("[App.js] Inside componentWillMount()");
    }

    componentDidMount() {
        console.log("[App.js] Inside componentDidMount()");
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log("[UPDATE App.js] Inside shouldComponentUpdate()", nextProps);
    //     console.log('nextProps.persons = ', nextProps.persons);
    //     console.log('this.props.persons = ', this.props.persons);
    //     return true;
    // }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("[UPDATE App.js] Inside componentWillUpdate()", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[UPDATE App.js] Inside componentDidUpdate()", prevProps, prevState);
    }

    // state = {
    //     persons: [
    //         {id: '1', name: 'BTB', age: 26},
    //         {id: '2', name: 'Nicu', age: 28},
    //         {id: '3', name: 'Boby', age: 27}
    //     ],
    //     otherState: 'other state',
    //     showPersons: false
    // }

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
        console.log("[App.js] Inside render()");
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}/>;
        }

        return (
            <WithClass classes={classes.App}>
                <button onClick={() => {this.setState({showPersons: true}) }}>Show persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </WithClass>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, i\'am Valentin!!!'));
    }
}

export default App;
