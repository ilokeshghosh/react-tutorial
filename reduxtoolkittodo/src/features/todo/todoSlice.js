import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    // todos: [{id:1, text:'Hello World', isEditable:false}]
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                priority: 'low',
                status: false
            }
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, text: action.payload.text };
                } else {
                    return todo;
                }
            })
        },
        setIsEditable: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    console.log(todo.isEditable);
                    return { ...todo, isEditable: !todo.isEditable }
                } else {
                    return todo;
                }
            })
        },
        changePriority: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, priority: action.payload.priority }
                } else {
                    return todo;
                }
            })
        },
        changeStatus: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, status: !todo.status }
                } else {
                    return todo;
                }
            })
        }

    }
})


export const { addTodo, removeTodo, updateTodo, setIsEditable, changePriority, changeStatus } = todoSlice.actions

export default todoSlice.reducer
