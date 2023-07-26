import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person_action'

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value*1
        const personObj = {id:nanoid(),name, age}
        this.props.addAPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        return (
            <div>
                <h2>This is Person component, Sum in the Count component is {this.props.sum}</h2>
                <input ref={c => this.nameNode = c} type='text' placeholder='input name' />
                <input ref={c => this.ageNode = c} type='text' placeholder='input age' />
                <button onClick={this.addPerson}>Add</button>
                <ul>
                    {this.props.persons.map((p)=>{
                        return <li key={p.id}>{p.name}--{p.age}</li>
                    })
                        }
                </ul>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return { persons: state.persons, sum: state.sum }
}

const mapDispatchToProps = {
    addAPerson:createAddPersonAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)
