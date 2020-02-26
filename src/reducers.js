import { TEXT_SEARCH_FIELD,REQUEST_ROBOT_SUCCESS
        ,REQUEST_ROBOT_FAILED,
        REQUEST_ROBOT_PENDING} from './constant.js'

const initialStateSearch = {
  searchField : ''
}
export const searchRobot = (state = initialStateSearch , action = {} )=>{
  console.log(action.type);
  switch(action.type){
    case TEXT_SEARCH_FIELD:
      return {
        ...state,
        searchField:action.payload
      }
    default:
      return state
  }
}

const initialStateRequest = {
  robot : [],
  error:'',
  isPending:false
}

export const requestRobot = (state = initialStateRequest, action={})=>{
  switch (action.type) {
    case REQUEST_ROBOT_SUCCESS:
        return Object.assign({},state,{robot:action.payload,isPending:false})
    case REQUEST_ROBOT_FAILED:
        return Object.assign({},state,{error:action.payload})
    case REQUEST_ROBOT_PENDING:
        return Object.assign({},state,{isPending:true})
    default:
        return state
  }
}
