import { CounterState } from "./counter.state";
import { UserState } from "./user.state";

export interface AppState
{
    counter:CounterState,
    user:UserState
}

