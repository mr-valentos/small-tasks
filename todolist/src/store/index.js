import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'
import toDoReduser from './todoSlice'

const rootReduser = combineReducers({
    todos: toDoReduser
})

export default configureStore({
    reducer: rootReduser,
});