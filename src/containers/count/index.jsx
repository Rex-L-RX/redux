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
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
