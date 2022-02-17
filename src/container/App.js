import React, {Component} from 'react';
import appClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {id: 'item1', name: 'Nill', age: 27},
            {id: 'item2', name: 'Mim', age: 30},
            {id: 'item3', name: 'Emma', age: 3}
        ],
        showPerson: false
    }
    nameChangeHandler = (e, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        })
        const person = this.state.persons[personIndex];
        person.name = e.target.value;
        const persons = [...this.state.persons];
        persons[personIndex].name = person.name;
        this.setState({
            persons: persons
        })
    }
    togglePersonHandler = () => {
        const show = this.state.showPerson;
        this.setState({
            showPerson: !show
        })
    }
    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    render() {
        let persons = null;

        if (this.state.showPerson) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}
            />
        }
        return (
            <div className={appClasses.App}>
                <Cockpit
                    title={this.props.appTitle}
                    clicked={this.togglePersonHandler}
                    persons={this.state.persons}
                    showPerson={this.state.showPerson}
                />
                {persons}
            </div>
            // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, does it work?'))
        )
    }
}

export default App;
