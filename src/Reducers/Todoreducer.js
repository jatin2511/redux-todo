import { add_todo,delete_todo } from "../Action-creators/Todo"
const initialstae={
todos:[]
}
function reducer (state=initialstae,action){
    switch(action.type){
        case add_todo:{
         return {
            ...state,
            todos:[...state.todos,action.payload]
         }
        }
        case delete_todo:{
            const newtodos=state.todos.filter((todo,index)=>index!==action.payload)
            
        return {
            ...state,
            todos:newtodos
            
        }
        }
       default:{
           return {
            ...state
           }
        }
    }
}
export default reducer;