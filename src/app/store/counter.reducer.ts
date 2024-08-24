import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { decrement, increment, reset } from "./counter.actions";

export const counterReducer = createReducer(initialState,
    on(increment, (state,action)=> {
        console.log(action);
        return {...state,counter:state.counter+action.value}}), 
    on(decrement, (state,action)=> {
        console.log(action);
        return {...state,counter:state.counter-action.value}}), 
    on(reset, (state,action)=> {return {...state,counter:0}}) 
);