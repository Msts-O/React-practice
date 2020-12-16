import React from 'react'
import Summary from "../ProjectDetails/Summary";
import { Link } from 'react-router-dom';

const List = ({projects}) => {
    return (
        <div className="list section">
        { projects && projects.map(project => {
            return (
                <Link to={'/project/' + project.id} key={project.id}>
                <Summary project={project} />
            </Link>
        )
        })}
</div>
     )
  }

export default List;