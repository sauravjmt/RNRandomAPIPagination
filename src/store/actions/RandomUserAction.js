import * as ActionType from './type'

export function fetchRandomUser(isRefresh){
    return {
        type:ActionType.FETCH_RANDOM_USER,
        isRefresh
    }
}
    
  
  export function fetchRandomUserScuccess(user){
    return {
        type: ActionType.FETCH_RANDOM_USER_SUCCESS,
        user
    }
  }


   
   

  export function fetchRandomUserFailure(){
  return {
      type:ActionType.FETCH_RANDOM_USER_FAILURE
  }
  }


  export function paginationDataUpdate(paginationData){
      return {
          type:ActionType.PAGINATION_DATA,
          paginationData
      }
  }

  export function rowFilterData(dataObj) {
    return {
      type: ActionType.RANDOM_ROW_FILTER,
      dataObj
    }
  }