import { createAction, props } from "@ngrx/store";

export const increment = createAction("counter Increment",props<{value:number}>()); // will return function increment() which is  used in counter-button.ts
export const decrement = createAction("counter Decrement",props<{value:number}>());
export const reset = createAction("counter reset");