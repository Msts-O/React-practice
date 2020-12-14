import React from 'react' ;
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Details = (props) => {
 const { project } = props;
   if (project){
  return(
    <div className= "project-details">
     <div className="card z-depth-10">
      <div className="card-content">
       <span className="card-title">{ project.title }</span>  #id番号は後ろに添えておく為
        <p>project.content</p>
      </div>
     <div className="card-action gret lighten-4 grey-text">
        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
         <div>{project.createrd_at}</div>
     </div>
     </div>
    </div>
  )
}  else{
    return(
        <div className="container center">
        <p>Loaging project...</p>
    </div>
    )
   }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
  return{
    project: project
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Details);