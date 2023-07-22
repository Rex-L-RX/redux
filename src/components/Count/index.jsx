import React, { Component } from 'react'
import store from '../../redux/store.js'
import {
    createIncrementAction,
    createDecrementAction,
    createAsyncAction
} from '../../redux/count_action.js'
export default class Count extends Component {

    increment = () => {
        const {value} = this.selectedNumber
        store.dispatch(createIncrementAction(value*1))
    }
    decrement = () => {
        const {value} = this.selectedNumber
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd = () => {
        const {value} = this.selectedNumber
        const count  = store.getState()
        if(count%2!==0){
            store.dispatch(createIncrementAction(value*1))
        }
    }
    incrementAsyc = () => {
        const {value} = this.selectedNumber
        setTimeout(()=>{
            store.dispatch(createAsyncAction(value*1,500))
        },500)
    }
    render() {
        return (
            <div>
                <h1>Sum: {store.getState()}</h1>
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
