let initialState = {
  isUserLoggedIn : false,
    user : null
  };
  
  function authReducer(state = initialState, action) {
    switch (action.type) {
  
      case 'LOGIN':
        console.log("data in reducer from login action", action.payload);
        // work  / logic will be her
        return {
          ...state,
          isUserLoggedIn:  true,
          user: action.payload
        };
        case 'SIGNUP':
        console.log("data in reducer from signup action", action.payload);
        // work  / logic will be her
        return {
          ...state,
          isUserLoggedIn:  true,
          user: action.payload
        };
        case 'SIGNOUT':
        console.log("data in reducer from signout action", action.payload);
        // work  / logic will be her
        return {
          ...state,
          isUserLoggedIn:  false
        };
      default:
        return state;
    }
  }
  
  export default authReducer;