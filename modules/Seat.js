import React, { Component, PropTypes } from 'react';

export default class Seat extends Component {
    render(){
        return(
            <div className="seat"></div>
        );
    }
}

Seat.PropTypes = {
    id: PropTypes.number.isRequired,
    dev: PropTypes.number
};