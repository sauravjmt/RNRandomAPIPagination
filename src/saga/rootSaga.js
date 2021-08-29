import { fork } from "redux-saga/effects";
import {helloSaga} from './helloSaga'
import { watchFetchRandomUser } from "./randomUserSaga";


export function* rootSaga(){


    yield fork(helloSaga)

    yield  fork(watchFetchRandomUser)
}