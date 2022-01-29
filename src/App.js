import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Nill', age: 27},
            {name: 'Mim', age: 30},
            {name: 'Emma', age: 3}
        ],
        anotherData: 'There`s another data here just for test!'
    }
    switchNameHandler = (nillName, mimName) => {
        this.setState({
            persons:[
                {name: nillName, age: 28},
                {name: mimName, age: 30},
                {name: 'Emma', age: 2}
            ]
        })
    }
    nameChangeHandler = (e) => {
        this.setState({
            persons:[
                {name: 'Nill', age: 28},
                {name: 'Mim', age: 30},
                {name: e.target.value, age: 2}
            ]
        })
    }
    render() {
        const btnStyle = {
            border: '1px solid blue',
            backgroundColor: 'lightBlue',
            padding: '10px'
        }
        return (
            <div className='App'>
                <h1>
                    Hi! I`m Nill and this is my first project with react :D
                </h1>
                {/*how add no name and not changing one value*/}
                <button
                    onClick={this.switchNameHandler.bind(this, 'Nill', 'Masoud')}
                    style={btnStyle}
                >
                    Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    readOnly
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={()=> {this.switchNameHandler('Nilu', 'MasoudManson')}}
                    readOnly/>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    change={this.nameChangeHandler}>
                    Emma is Nill and Mim`s dog
                </Person>
            </div>
            // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, does it work?'))
        )
    }
}

export default App;
