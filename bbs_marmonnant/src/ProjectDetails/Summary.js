import React from 'react' ;

const Summary = ({project}) => {
    return(
      <div className= "card z-depth-0 project-summary">
       <div className= "card-content black-text text-darken-3">
        <span className="card-title">{ project.title }</span>
         <p>Posted by ○○</p>
          <p className="red-text">○day○month</p>
       </div>
      </div>
    )
}
export default Summary ;