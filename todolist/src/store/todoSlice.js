import { createSlice, configureStore } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
      todos: [
        {text: 'hi',
        complited: true
        },
        {text: 'hi',
        complited: false
        },
      ]
    },
    reducers: {
      addTask: (state, action) => {
        state.todos.push({
          text: action.payload.text,
          complited: false,
        })
      },
      deleteTask: (state, action) => {
        state.todos = state.todos.filter((p, i) => i !== action.payload.index)
      },
      changeStatus: (state, action) => {
        state.todos = state.todos.map((p, i) => (i === action.payload.index) ? { ...p, complited: !p.complited }: p)
      },
      changeStatusOfAll: (state, action) => {
        state.todos = state.todos.map((p) => ({text: p.text, complited: action.payload.status}))
      },
    }
  })

  export default taskSlice.reducer
  export const {addTask, deleteTask, changeStatus, changeStatusOfAll} = taskSlice.actions