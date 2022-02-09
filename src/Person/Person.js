import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyleDiv = styled.div`
      border: 1px solid #eee;
      box-shadow: 0 0 6px #dedede;
      padding: 20px;
      margin: 20px auto;
      width: 400px;
      color: darkblue;
      @media (min-width: 500px){
        width: 300px;
      }
    `;

const person = (props) => {

    return (
        <StyleDiv>
            <p onClick={props.click}> My name is {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyleDiv>
    )
}

export default person;