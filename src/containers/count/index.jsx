import CountUI from '../../components/Count'
import {
    createIncrementAction,
    createDecrementAction,
    createAsyncAction
} from '../../redux/count_action'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return { count: state }
}

function mapDispatchToProps(dispatch) {
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
}
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
