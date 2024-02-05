import axios from 'axios'

const todosApi = axios.create({
    baseURL: 'https://localhost:3500'
})

export const getTodos = async () => {
    const response = await todosApi.get('/todos')
    return response.data;
}

export const addTodo = async () => {
    return await todosApi.post('/todos', todos);
}

export const updateTodo = async () => {
    return await todosApi.patch(`/todos/${todo.id}`, todos);
}

export const deleteTodo = async ({ id }) => {
    return await todosApi.delete(`/todos/${id}`, id);
}

export default todosApi;