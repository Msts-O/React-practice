import React from 'react' ;
import moment from 'moment'

const Summary = ({project}) => {
    return(
      <div className= "card z-depth-0 project-summary">
       <div className= "card-content black-text text-darken-3">
        <span className="card-title">{ project.title }</span>
         <p>Posted bythe {project.authorFirstName} {project.authorLastName}</p>
          <p className="red-text">{ moment(project.createdAt.toDate()).calender()}</p>
       </div>
      </div>
    )
}
export default Summary ;