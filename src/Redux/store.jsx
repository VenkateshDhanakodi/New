import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userReducer'
export default configureStore({
    reducer:{
        data:userReducer,
    }
})