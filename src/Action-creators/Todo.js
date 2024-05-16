export const add_todo = 'ADD-TODO';
export const delete_todo = 'DELETE_TODO';
export const addtodo = (todo) => ({
    type: add_todo,
    payload: todo
})
export const deletetodo = (index) => ({
    type: delete_todo,
    payload: index
})