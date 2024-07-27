import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Rohit Maske"}]
}

//this is sytax to create slice or reducers
//here this createSlice needs name,initial stae and list of reducers (functions)
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        //you get access of state and action in reducers 
        //state has updated state values in store inshort state holds the all the values 
        //action means changes you want to made 
        //then we push the variabel to the state
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        //payload contians the data or info needed to perform the change 
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{
                todo.id!==action.payload
            })
        },
    }
})


export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer


//this is about the reducers creation and it has some syntax which should be followed 
//slice is bigger version of reducers 