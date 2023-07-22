import React, { Component } from 'react'

export default class Count extends Component {

    state = {count:0}

    increment = () => {
        const {value} = this.selectedNumber
        const {count}=this.state
        this.setState({count:count+value*1})
    }
    decrement = () => {
        const {value} = this.selectedNumber
        const {count}=this.state
        this.setState({count:count-value*1})
    }
    incrementIfOdd = () => {
        const {value} = this.selectedNumber
        const {count}=this.state
        if(count%2!==0){
            this.setState({count:count+value*1})
        }
    }
    incrementAsyc = () => {
        const {value} = this.selectedNumber
        const {count}=this.state
        setTimeout(()=>{
            this.setState({count:count+value*1})
        },500)
    }
    render() {
        return (
            <div>
                <h1>Sum: {this.state.count}</h1>
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
