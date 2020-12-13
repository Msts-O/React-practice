export const createProject = (project) => {
  return(dispatch, getState, { getFirebase, getFirestore }) =>{
      const firestore = getFirestore();
      // eslint-disable-next-line
       firestore.collection('projects') .add({
            ...project,
           authorFirstname: 'Masa',
           authorLastname:  'Ogi',
           authorId: 12345,
           createdAt: new Date()
           }).then(() =>{
              dispatch({
                  type: 'CREATE_PROJECT',project})
           }).catch((err) => {
               dispatch({
                   type: 'CREATE_PROJECT_ERROR',err})
       })
  }
};