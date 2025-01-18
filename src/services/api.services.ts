import {ITodosObject} from "../modeles/ITodosObject.tsx";
const url='https://dummyjson.com'

const getAllTodos = async ():Promise<ITodosObject> => {
  const TodosResponseObject= await fetch(url +'/todos ')
        .then(value => value.json())
    return TodosResponseObject

}
export {
    getAllTodos
}