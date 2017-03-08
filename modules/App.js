import React from 'react'
import { Link } from 'react-router'
import Board from './Board.js'

export default React.createClass({
  render() {
    return (
    <div>
        <Board knightPosition={[4,7]} />
    </div>
    )
  }
})
