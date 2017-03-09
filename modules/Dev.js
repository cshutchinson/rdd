import React, { Component, PropTypes } from 'react';

export default class Dev extends Component {
    render(){
        return (
            <div classNmae="dev">
                {this.props.name}
            </div>
        )
    }
}

Dev.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};