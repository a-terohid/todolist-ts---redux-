import { ActionRuturn } from './../../types/types';
import { TodoListActions } from "../../types/enums"

const AddTodo = ( todo : string ) : ActionRuturn  => {
    return {
        type : TodoListActions.ADD_TODO,
        payload : todo,
    }
}

const CheckTodo = ( todo : string ) : ActionRuturn => {
    return {
        type : TodoListActions.CHECK_TODO,
        payload : todo,
    }
}

const DeleteTodo = ( todo : string ) : ActionRuturn => {
    return {
        type : TodoListActions.DLETE_TODO,
        payload : todo,
    }
}


export { AddTodo , CheckTodo , DeleteTodo }