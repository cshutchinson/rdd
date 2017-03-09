import React from 'react';
import ReactDOM from 'react-dom';
import Seat from './modules/Seat';
import Table from './modules/Table';
import Dev from './modules/Dev';

const rootEl = document.getElementById('app');


ReactDOM.render(
    <div className="dev">
        <Dev id={42} name={"csh"} />
        <Table id={1} name={"RM"}>
            <Seat id={0}/>
            <Seat id={1}/>
            <Seat id={2}/>
            <Seat id={3}/>
            <Seat id={4}/>
            <Seat id={5}/>
            <Seat id={6}/>
            <Seat id={7}/>
        </Table>
    </div>,
    rootEl
);



