export const createProject = (project) => {
  return(dispatch, getState, { getFirebase, getFirestore }) =>{
      const firestore = getFirestore();
      const profile   = getState().firebase.profile;
      const authId    = getState().firebase.auth.uid;
      // eslint-disable-next-line
       firestore.collection('projects') .add({
            ...project,
           authorFirstname: profile.firstName,
           authorLastname:  profile.lastName,
           authorId: authId,
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