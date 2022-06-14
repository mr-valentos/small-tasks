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
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.todos.push({
          text: action.payload.text,
          complited: false,
        })
      },
    //   delete: state => {
    //     state.todos.filter()
    //   }
    }
  })

  export default taskSlice.reducer
  export const {addTask} = taskSlice.actions