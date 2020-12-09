import React from 'react'
import Summary from "../ProjectDetails/Summary";

const List= ( { projects } ) => {
    return(
     <div className="project-list section">
        { projects && projects.map( project => {
            return(
             <Summary project={ project } key= {project.id}/>
            )
        })}
        <div className="card project-summary">
        <div className="card-content grey-text text-darken-8">
        <span className="card-title">Testtitle</span>
    <p>Posted by New Articles</p>
    <p className="grey-text"></p>
       </div>
        </div>
     </div>
    )
}

export default List;
