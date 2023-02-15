import { useState , useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { FILTER } from '../types/enums';
import { SATE } from '../types/types';
import Todo from './Todo';
import styles from "./TodoList.module.scss"
import { BsFillPlusSquareFill } from "react-icons/bs"; 
import { AddTodo } from '../redux/TodoList/TodoList.Action';



const TodoList = (  ) => {

    const TODO_LIST = useSelector( ( state : SATE  ) => state.todoList )
    const [ todo , setTodo ] = useState("")
    const [ filter , setFilter ] = useState( FILTER.ALL )
    const [ finalList , setFinalList ] = useState( TODO_LIST )
    
    const DISPATCH = useDispatch()
    

    const clickHandler = () => {
        if( todo !== "" ) {
            DISPATCH( AddTodo( todo ) )
            setTodo("")
        } else { 
            alert("Please fill inpute")
        }
    }

    const filterHandler = ( filter : FILTER ) : any => { setFilter( filter ) }

    useEffect( () => {
        if( filter === FILTER.COMPLETED ){
            const completed = TODO_LIST.filter( item => item.isCheck === 1 )
            setFinalList( completed )
        } else if ( filter === FILTER.NOT_COMPLETED ){
            const Not_completed = TODO_LIST.filter( item => item.isCheck === 0 )
            setFinalList( Not_completed )
        } else {
            setFinalList( TODO_LIST )
        }
    } , [ filter , todo , TODO_LIST ] )

    const mystyle : any = {
        color: "#f6f6f6",
        backgroundColor: "#205375",
    };


    return (
        <div className={ styles.TODOlist } >
            <div>
                <div className={ styles.inputDiv } >
                    <input 
                        className={ styles.input }
                        value={ todo }
                        type="text"
                        onChange={ (e) => setTodo( e.target.value ) } />
                    <BsFillPlusSquareFill onClick={ clickHandler } className={ styles.add } />
                </div>
                <div className={ styles.filter } >
                    <p onClick={ () => filterHandler( FILTER.ALL ) } style = { filter === FILTER.ALL ? mystyle : null }  >all</p>
                    <p onClick={ () => filterHandler( FILTER.COMPLETED ) } style = { filter === FILTER.COMPLETED ? mystyle : null }  >completed</p>
                    <p onClick={ () => filterHandler( FILTER.NOT_COMPLETED ) } style = { filter === FILTER.NOT_COMPLETED ? mystyle : null }  >not completed</p>
                </div>
            </div>
            <div>
                {
                    finalList.map( ( item , index ) => <Todo 
                                                            key={ index }  
                                                            todo = { item.todo }
                                                            isCheck = { item.isCheck }  
                                                            /> )
                }
            </div>
        </div>
    );
};

export default TodoList;