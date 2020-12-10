import writerReducer from './writerreducer'
import projectReducer from './projectreducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer =combineReducers({
  writer:writerReducer,
  project:projectReducer,
  firestore: firestoreReducer
    })

export default  rootReducer