import * as ActionType from '../store/actions/type'
import axios from 'axios';
import { takeLatest,call,put,select } from '@redux-saga/core/effects';
import { fetchRandomUserScuccess,fetchRandomUserFailure, paginationDataUpdate } from '../store/actions/RandomUserAction';




function fetchRandomUserApi(page) {

  return axios.get("https://randomuser.me/api/",{
    params: {
      seed: 1,
      page:page,
      results:10
    }
  }). then(response => ({response})).catch(error => ({error}));

  
    // return axios.get("https://randomuser.me/api/?seed=1&page=1&results=10").
    //   then(response => ({response})).catch(error => ({error}));
  }




export function *fetchRandomUser() {

   const stateData = yield select()
    const userData=     stateData.user
     const {page}=userData.rowFilterParam

     console.log({page})

    const { response, error } = yield call(fetchRandomUserApi,page);
    if(response){
        
        yield put(fetchRandomUserScuccess(response.data.results));
        

        const {page}=response.data.info

         paginationData={page:page}

        yield put(paginationDataUpdate(paginationData))
    }
       
    else if(error){
      console.log("Errrrrrrrr===>",error)
      yield put(fetchRandomUserFailure());
    }
    
  }
  
  
  export function *watchFetchRandomUser() {
    yield takeLatest(ActionType.FETCH_RANDOM_USER, fetchRandomUser);
  }


  export default watchFetchRandomUser()
