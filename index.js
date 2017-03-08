import React from 'react';
import ReactDOM from 'react-dom';
import Board from './modules/Board';
import { observe } from './modules/Game';

const rootEl = document.getElementById('app');

observe(knightPosition =>
    ReactDOM.render(
        <Board knightPosition={knightPosition}/>,
        rootEl
    )
);



