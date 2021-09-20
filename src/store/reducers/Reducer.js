let initialState = {
    error:'',
    records: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
  
      case 'FETCH_RECORD':
        console.log("data in reducer from fetch action", action.payload);
        // work  / logic will be her
        return {
          ...state,
          records: action.payload,
        };
        case 'FILTER_RECORD':
          console.log("data in reducer from Filter action", action.payload);
          // work  / logic will be her
          return {
            ...state,
            records: action.payload,
          };
        case 'ADD_RECORD':
          console.log("data in reducer from fetch ADD", action.payload);
          // work  / logic will be her
          return {
            ...state,
          };
        case 'DELETE_RECORD':
          console.log("data in reducer from fetch action", action.payload);
          // work  / logic will be her
          return {
            ...state,
            res: action.payload,
          };
          case 'UPDATE_RECORD0':
            console.log("data in reducer from Update0 action", action.payload);
            // work  / logic will be her
            return {
              ...state,
              resU: action.payload,
            };
          case 'UPDATE_RECORD':
            console.log("data in reducer from Update action", action.payload);
            // work  / logic will be her
            return {
              ...state,
              res: action.payload,
            };
  
      
      default:
        return state;
    }
  }
  
  export default reducer;