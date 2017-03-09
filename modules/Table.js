import React, { Component, PropTypes } from 'react';

export default class Table extends Component {
    render() {
        return (
            <div className="table">
                {this.props.children}
            </div>
        )
    }
}

Table.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}