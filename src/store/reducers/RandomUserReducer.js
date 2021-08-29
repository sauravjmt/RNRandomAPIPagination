
import axios from 'axios';
import * as ActionType from '../actions/type'


// Initial State
const initialState = {
    user: [],
    rowFilterParam: {
        seed: 1,
        page: 1,
        result: 10
    },
    loading: false,
    isLoadMore:false,
    total: 10,

    pagination: {}
};





const randomUserReducer = (state = initialState, action) => {

    switch (action.type) {


        case ActionType.FETCH_RANDOM_USER:

        if(action.isRefresh){
            return {
                ...state,
                isLoadMore:true,
                

            }

        }else{
            return {
                ...state,
                user:[],
                loading: true,
                rowFilterParam:{...state.rowFilterParam, ...{page:1}}
            }
        }
            


        case ActionType.FETCH_RANDOM_USER_SUCCESS:
           

            return {
                ...state,
                user: [...state.user,...action.user],
                loading: false,
                isLoadMore:false
            }

        case ActionType.FETCH_RANDOM_USER_FAILURE:


            return {
                ...state,
                loading: false,
                isLoadMore:false
            }

        case ActionType.PAGINATION_DATA:
            return {
                ...state,
                pagination: action.paginationData
            }
        case ActionType.RANDOM_ROW_FILTER:

            return {
                ...state,
                rowFilterParam: { ...state.rowFilterParam, ...action.dataObj }
            }

        default:
            return state
    }





}


export default randomUserReducer