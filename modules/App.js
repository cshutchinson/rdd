import React from 'react'
import { Link } from 'react-router'
import Dev from './Dev'

export default React.createClass({
  render() {
    return (
    <div>
        <Dev id={42} name={"csh"} />
    </div>
    )
  }
})
