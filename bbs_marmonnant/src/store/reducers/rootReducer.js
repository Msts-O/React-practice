import writerReducer from './writerreducer'
import projectreducer from './projectreducer'
import { combineReducers } from 'redux'

const rootReducer =combineReducers({
  writer:writerReducer,
  project:projectreducer
    })

export default  rootReducer