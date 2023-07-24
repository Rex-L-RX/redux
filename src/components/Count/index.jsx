import React, { Component } from 'react'

export default class Count extends Component {

    increment = () => {
        const {value} = this.selectedNumber
        this.props.increment(value*1)
    }
    decrement = () => {
        const {value} = this.selectedNumber
        this.props.decrement(value*1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectedNumber
        if(this.props.count % 2 !== 0){
            this.props.increment(value*1)
        }
    }
    incrementAsyc = () => {
        const {value} = this.selectedNumber
        this.props.incrementAsync(value*1,500)
    }
    render() {
        return (
            <div>
                <h1>Sum: {this.props.count}</h1>
                <select ref={c => this.selectedNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>add if sum is odd</button>&nbsp;
                <button onClick={this.incrementAsyc}>Asyc add</button>
            </div>

        )
    }
}
