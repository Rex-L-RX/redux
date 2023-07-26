import {
    createIncrementAction,
    createDecrementAction,
    createAsyncAction
} from '../../redux/actions/count_action'
import { connect } from 'react-redux'
import React, { Component } from 'react'

class Count extends Component {

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
                <h2>This is Count component</h2>
                <h4>Sum: {this.props.count}, The Number of Persons: {this.props.numberOfPersons}</h4>
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

function mapStateToProps(state) {
    return { count: state.sum, numberOfPersons: state.persons.length  }
}

//mapDispatchToProps can be a function or it can be replaced by an obj
/* function mapDispatchToProps(dispatch) {
     return {
         increment: (data) => {
             dispatch(createIncrementAction(data))
        },
        decrement: (data) => {
             dispatch(createDecrementAction(data))
         },
        incrementAsync: (data,time)=>{
             dispatch(createAsyncAction(data,time))
         }
     }
}*/

const mapDispatchToProps = {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createAsyncAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Count)
 