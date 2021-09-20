import { db } from "../../config/Firebase";
export const fetchRecord = (setLoading, userSUp) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      await db().collection(userSUp.email).onSnapshot(
        querySnapshot =>{
          let records = [];
          querySnapshot.forEach((doc) => {
            records.push({
              docID: doc.id,
              ...doc.data(),
            });
          });
      
          console.log("data from firebase into action", records);
          dispatch({
            type: 'FETCH_RECORD',
            payload: records,
          });
        }
      );
  
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  export const fetchFilterRecord = (setLoading, slDate, userSUp) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      await db().collection(userSUp.email).where('date','==',slDate).onSnapshot(
        querySnapshot =>{
          let records = [];
          querySnapshot.forEach((doc) => {
            records.push({
              docID: doc.id,
              ...doc.data(),
            });
          });
      
          console.log("data from firebase into action", records);
          dispatch({
            type: 'FILTER_RECORD',
            payload: records,
          });
        }
      );
  
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };
export  const addAction =(data, userSUp)=> async (dispatch) => {


    try {
      let res = await db().collection(userSUp.email).add(data)
      console.log("res", res);
      dispatch({
        type: 'ADD_RECORD',
      });
    } catch (error) {
      console.log("error", error);
    }}
 export const deleteAction =  (item, userSUp) =>async (dispatch) =>{
    try {
      let res = await db().collection(userSUp.email).doc(item.docID).delete();
      console.log("Delete");
      dispatch({
        type: 'DELETE_RECORD',
        payload: item.docID,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  export const updateAction0 =  (item1) => (dispatch) =>{
    try {
      console.log("Updated0");
      dispatch({
        type: 'UPDATE_RECORD0',
        payload: item1,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  export const updateAction =  (item, data, userSUp) =>async (dispatch) =>{
    try {
      let res = await db().collection(userSUp.email).doc(item.docID).update(data);
      console.log("Updated");
      dispatch({
        type: 'UPDATE_RECORD',
        payload: item,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  