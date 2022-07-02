import { createSlice } from '@reduxjs/toolkit'

// возвращает уникальный короткий ID в заданном числовом диапазоне
function getRandomID(min, max) {
  var int = Math.floor(Math.random() * (max - min + 1)) + min;

  return int.toString(36);
}


const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
      todos: [
        
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
          complited: action.payload.complited || false,
          id: action.payload.id || getRandomID(0, 1000),
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
      },
      // Editing
      editTask: (state, action) => {
        state.todos = state.todos.map(p => (p.id === action.payload.id) ? { ...p, text: action.payload.text}: p)
      }
    }
  })

  export default taskSlice.reducer
  export const {addTask, deleteTask, changeStatus, changeStatusOfAll, deleteCompleted, active, completed, all, editTask} = taskSlice.actions