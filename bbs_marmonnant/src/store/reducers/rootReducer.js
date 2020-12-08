import WriterReducer from './WriterReducer'
import ProjectsReducer from './ProjectsReducer'
import { combineReducers } from 'redux'

const rootReducer =combineReducers({
  Writer:WriterReducer,
  Projects:ProjectsReducer
    })

export default  rootReducer