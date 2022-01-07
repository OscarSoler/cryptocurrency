import createSagaMiddleware from "@redux-saga/core"
import {createStore, applyMiddleware} from "redux"
import rootSaga from "redux/sagas/rootSaga"

import rootReducer from "../reducers"

const sagaMiddle = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddle))

sagaMiddle.run(rootSaga)

export default store
