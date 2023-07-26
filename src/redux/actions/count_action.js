import {INCREMENT,DECREMENT} from '../constant'
import store from '../store'
export function createIncrementAction (data){
    return {type:INCREMENT,data}
}
export function createDecrementAction (data){
    return {type:DECREMENT,data}
}
export function createAsyncAction(data, time){
    return ()=>{
        setTimeout(()=>{
            store.dispatch(createIncrementAction(data))
        },time)
    }
}