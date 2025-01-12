import {useEffect, useState} from "react";
import {ITodo} from "../../modeles/ITodo.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";


export const TodoComponents = () => {
    const[todoComponents,setTodocomponents]=useState<ITodo[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos ')
            .then(value => value.json())
            .then((iTodos: ITodo[]) => {
                setTodocomponents(iTodos) });
    }, [])
    return (
        <div>
            {
                todoComponents.map(todoComponent=><TodoComponent key={todoComponent.id} item={todoComponent}/>)
            }
        </div>
    );
};





