import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare'
import Knight from './Knight'
import { moveKnight, canMoveKnight } from './Game'

class Board extends Component {
    static propTypes = {
        knightPosition: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    };

    handleSquareClick(toX, toY) {
        if(canMoveKnight(toX, toY)) {
            moveKnight(toX, toY);
        }
    }

    renderPiece(x, y) {
        const [knightX, knightY] = this.props.knightPosition;
        if(x === knightX && y === knightY) {
            return <Knight/>
        }
    }

    render() {
        const squares = [];
        for (let i=0; i<64; i++){
            squares.push(this.renderSquare(i));
        }

        return (
            <div style={{
                width: '400px',
                height: '400px',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {squares}
            </div>
        );
    }

    renderSquare(i){
        const x = i % 8;
        const y = Math.floor(i/8);
        const black = (x+y) % 2 === 1;
        const [knightX, knightY] = this.props.knightPosition;
        const piece = (x === knightX && y === knightY) ? <Knight/> : null;

        return (
            <div key={i}
                 style={{
                    width: '12.5%',
                    height: '12.5%'
                    }}>
                 <BoardSquare x={x}
                              y={y}>
                     {this.renderPiece(x,y)}
                 </BoardSquare>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Board);