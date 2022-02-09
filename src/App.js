import React, {Component, useState} from 'react';
import './App.css';
import styled from "styled-components";
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'darkRed':'darkGreen'};
  padding: 10px;
  color: #fff;
  border: 1px solid blue;
  &:hover{
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: #000;
  }
`;
class App extends Component {
    state = {
        persons: [
            {id: 'item1', name: 'Nill', age: 27},
            {id: 'item2', name: 'Mim', age: 30},
            {id: 'item3', name: 'Emma', age: 3}
        ],
        anotherData: 'There`s another data here just for test!',
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
        // Inline style that we use styled component instead of that:
        // const btnStyle = {
        //     border: '1px solid blue',
        //     color: '#fff',
        //     backgroundColor: 'lightGreen',
        //     padding: '10px'
        // }
        let persons = null;
        if (this.state.showPerson) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            click={() => this.deletePersonHandler(index)}
                            changed={(event) => this.nameChangeHandler(event, person.id)}
                            key={person.id}
                        />
                    })}
                </div>
            )
            // btnStyle.backgroundColor = 'red'
        }
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red') // classes = ['red']
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold') // classes = ['red', 'bold']
        }

        return (
            <div className='App'>
                <h1>
                    Hi! I`m Nill and this is my react exercise :D
                </h1>
                <p className={classes.join(' ')}>
                    This really works !
                </p>
                <StyledButton
                    alt={this.state.showPerson}
                    onClick={this.togglePersonHandler}
                >Toggle Persons
                </StyledButton>
                {persons}
            </div>
            // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, does it work?'))
        )
    }
}

export default App;
