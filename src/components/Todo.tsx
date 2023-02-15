import { IS_Check } from '../types/enums';
import { useDispatch } from 'react-redux';
import styles from "./Todo.module.scss"
import { CheckTodo, DeleteTodo } from '../redux/TodoList/TodoList.Action';

import { HiOutlineTrash } from "react-icons/hi";
import { BsCheck2Circle } from "react-icons/bs"; 

const Todo = ( prop: { todo : string , isCheck : IS_Check , key : number } ) => {
    const { todo , isCheck } = prop;
    const dispach = useDispatch()
    return (
        <div className={ styles.Todo } >
            <p className={ isCheck ? styles.checked : styles.todo }  >{ todo }</p>
            <div className={ styles.icon }>
                <h4 onClick={ () => dispach( CheckTodo( todo ) ) }><BsCheck2Circle className={ styles.check } /></h4>
                <h4 onClick={ () => dispach( DeleteTodo( todo ) ) }><HiOutlineTrash className={ styles.trash }/></h4>
            </div>
        </div>
    );
};

export default Todo;