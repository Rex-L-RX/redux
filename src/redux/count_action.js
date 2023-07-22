import {INCREMENT,DECREMENT} from './constant'
export function createIncrementAction (data){
    return {type:INCREMENT,data}
}
export function createDecrementAction (data){
    return {type:DECREMENT,data}
}