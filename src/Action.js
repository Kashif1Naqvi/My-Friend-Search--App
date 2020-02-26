import { TEXT_SEARCH_FIELD,
         REQUEST_ROBOT_FAILED
        ,REQUEST_ROBOT_PENDING
        ,REQUEST_ROBOT_SUCCESS } from './constant'

export const setSearchField =(text)=>{
      return{
          type : TEXT_SEARCH_FIELD,
          payload : text
        }
}

export const requestSearchRobot=()=>(dispatch)=>{
  dispatch({type:REQUEST_ROBOT_PENDING})
  fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce=>responce.json())
        .then(data => dispatch({type:REQUEST_ROBOT_SUCCESS,payload:data}))
        .catch(error => dispatch({type:REQUEST_ROBOT_FAILED,payload:error}))
}
