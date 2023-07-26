import countReducer from './count_reducer'
import personReducer from './person_reducer'
import {combineReducers} from '@reduxjs/toolkit'

const allReducer = combineReducers({
    sum: countReducer,
    persons: personReducer
})

export default allReducer
