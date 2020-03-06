import React, { Component } from 'react';

class Personcard extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            agecount: props.age
        }
    }

    handleclick = () =>
    {
        this.setState
        ({
            agecount: this.state.agecount + 1
        })
    }

    render()
    {
        const {fName, lName, hairColor} = this.props;
        return(
            <div>
                <h1>{lName}, {fName}</h1>
                <p>Age: {this.state.agecount}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.handleclick}>Birthday Button for {fName} {lName}</button>
            </div>
        );
    }
}

export default Personcard;