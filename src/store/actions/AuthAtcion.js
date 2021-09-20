import { authf } from "../../config/Firebase";
export const loginAction = (email, password) => async (dispach) => {
    try {
     const userCredential = await authf().signInWithEmailAndPassword(email, password)
    const user = userCredential.user
    dispach({
        type: 'LOGIN',
        payload: user
    })
    } catch (error) {
        alert(JSON.stringify(error))
      console.log("error", error);
    } 
  };
  export const signupAction = (email, password, fullName) => async (dispach) => {
    try {
     const userCredential = await authf().createUserWithEmailAndPassword(email, password, fullName)
    const userData = userCredential.user
    dispach({
        type: 'SIGNUP',
        payload: userData
    })
    } catch (error) {
        alert(JSON.stringify(error))
      console.log("error", error);
    } 
  };
  export const signOutAction = () => async (dispach) => {
    try {
     const userCredential = await authf().signOut()
    dispach({
        type: 'SIGNOUT'
    })
    } catch (error) {
        alert(JSON.stringify(error))
      console.log("error", error);
    } 
  };

  