import { IS_Check, TodoListActions } from "./enums";

export interface ActionRuturn {
    type : TodoListActions,
    payload : string,
}

export type TODO = {
    todo : string,
    isCheck : IS_Check
}

export interface SATE {
    todoList : TODO[],
}

