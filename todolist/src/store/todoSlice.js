import { createSlice, configureStore } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
      todos: [
        {text: 'hi',
        complited: true,
        id: 1,
        },
        {text: 'hi',
        complited: false,
        id: 2,
        },
      ],
      sort: {
        sortOn: false,
        active: true,
      }
    },
    reducers: {
      // Header
      addTask: (state, action) => {
        state.todos.push({
          text: action.payload.text,
          complited: false,
          id: Date.now(),
        })
      },
      // Main
      deleteTask: (state, action) => {
        state.todos = state.todos.filter((p, i) => p.id !== action.payload.id)
      },
      changeStatus: (state, action) => {
        state.todos = state.todos.map(p => (p.id === action.payload.id) ? { ...p, complited: !p.complited }: p)
      },
      changeStatusOfAll: (state, action) => {
        state.todos = state.todos.map((p) => ({text: p.text, complited: action.payload.status, id: p.id}))
      },
      // Footer
      deleteCompleted: state => {
        state.todos = state.todos.filter(p => p.complited === false)
      },
      active: state => {
        state.sort.sortOn = true
        state.sort.active = true
      },
      completed: state => {
        state.sort.sortOn = true
        state.sort.active = false
      },
      all: state => {
        state.sort.sortOn = false
      }
    }
  })

  export default taskSlice.reducer
  export const {addTask, deleteTask, changeStatus, changeStatusOfAll, deleteCompleted, active, completed, all} = taskSlice.actions