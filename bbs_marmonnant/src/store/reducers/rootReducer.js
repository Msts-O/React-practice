import writerReducer from './writerreducer'
import projectReducer from './projectreducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from "react-redux-firebase";

const rootReducer =combineReducers({
  writer:writerReducer,
  project:projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
    })

export default  rootReducer