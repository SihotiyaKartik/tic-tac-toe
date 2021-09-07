import React, { Component } from 'react'
import Square from './Square';
import isWinner from './isWinner';
import ArrayFull from './ArrayFull';

export class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares:Array(9).fill(null),
            flag:true,
            draw:false,
        };
        
    }
    

    handleClick(i){
        const squares = this.state.squares.slice();
        if(isWinner(squares) || squares[i]){return;}
        
        squares[i] = this.state.flag ? 'X' : 'O';
        this.setState({
            squares:squares,
            flag:!this.state.flag,
        });
        if(ArrayFull(squares) && !isWinner(squares)){
            this.setState({draw:true})
        }
    }

    renderSquare(i){
        const cls = "c" + i;
        return(
            <Square class={cls} value={this.state.squares[i]}
            onClick={() => this.handleClick(i)} />
        );
    }
    handleReset(){
        this.setState({
            squares:Array(9).fill(null),
            flag:true,
            draw:false,
        });
    }

    render() {
        const winner = isWinner(this.state.squares);
        var text;
        if(this.state.draw){text = "Draw";}
        else{
        if(winner){
            text = winner + " Wins";
        }
        else{
            text = 'Next Turn: ' + (this.state.flag?'X':'O');
        }
    }
        return (
            <div className='Main'>
                
                <div className="text">{text}</div>
                <div className='board'>
                <div className='sub'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='sub'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}  
                </div>
                <div className='sub'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                </div>
                <div>
                    <button className='reset' onClick={()=>this.handleReset()}>Reset</button>
                </div>
                
            </div>
        );   
    }
}

export default Board

