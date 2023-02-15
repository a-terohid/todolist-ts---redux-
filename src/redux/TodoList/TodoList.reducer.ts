import { IS_Check } from './../../types/enums';
import { ActionRuturn, TODO } from './../../types/types';
import { SATE } from "../../types/types";
import { TodoListActions } from '../../types/enums';

const initialState : SATE = {
    todoList: [
        { todo : "todo 1" , isCheck : IS_Check.FALSE },
        { todo : "todo 2" , isCheck : IS_Check.FALSE },
        { todo : "todo 3" , isCheck : IS_Check.FALSE },
        { todo : "todo 4" , isCheck : IS_Check.FALSE },
    ],
}


const TodoListReducer = ( state: SATE = initialState , action : ActionRuturn ) : SATE => {
    const { type , payload } = action
    const TODO_LIST = state.todoList

    switch ( type ) {
        case TodoListActions.ADD_TODO :
            const newTodo : TODO = {
                todo : payload,
                isCheck : IS_Check.FALSE,
            }
            TODO_LIST.push( newTodo );
            return { ...state }
        
        case TodoListActions.CHECK_TODO :
            const objIndex = TODO_LIST.findIndex((obj => obj.todo === action.payload));
            const updatedTodoList = TODO_LIST.slice();
            updatedTodoList[objIndex] = {...updatedTodoList[objIndex], isCheck: IS_Check.TRUE }; 
            return {
                ...state,
                todoList: updatedTodoList
            }

        case TodoListActions.DLETE_TODO :
            const newList = TODO_LIST.filter( obj => obj.todo !== payload)
            return {
                ...state,
                todoList : newList,
            }
        
        default : return state
    }

}

export default TodoListReducer 