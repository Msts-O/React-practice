const initState = {
    projects: [
        {id: '1', title: 'stuck in an error', content: 'oh... no...'},
        {id: '2', title: 'how to solve the problem', content: 'search for the question'},
        {id: '3', title: 'to solve the problem', content: 'completed!'},
    ]
}
const projectReducer = (state = initState, action) => {
    // eslint-disable-next-line
    　switch (action.type) {
         case 'CREATE_PROJECT':
          console.log('create_project',action.project)
             return state;
         case 'CREATE_PROJECT_ERROR':
             console.log('create project error', action.err);
             return state;
         default:
             return state;
     }
}

export default projectReducer