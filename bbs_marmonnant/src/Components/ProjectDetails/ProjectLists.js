import React from 'react' ;
import Summary from './Summary';

const ProjectLists = ({ projects }) => {
    return (
        <div className="project-list section">
        { projects && projects.map(project => {
            return (
                <Summary project={project} key={project.id} />
        )
        })}
</div>
)
}

export default ProjectLists;