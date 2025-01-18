import {useEffect, useState} from "react";
import {ITodo} from "../../modeles/ITodo.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import {getAllTodos} from "../../services/api.services.ts";
import {ITodosObject} from "../../modeles/ITodosObject.tsx";


export const TodoComponents = () => {
    const[todos,setTodocomponents]=useState<ITodo[]>([])
    useEffect(() => {
getAllTodos().then(({todos}:ITodosObject)=>{setTodocomponents(todos)})
    }, [])
    return (
        <div>
            {
                todos.map(todoComponent=><TodoComponent key={todoComponent.id} item={todoComponent}/>)
            }
        </div>
    );
};





