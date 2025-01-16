
const  baceURL='https://dummyjson.com'

export const getAll = async <T>(): Promise<T> => {
    return    await fetch(`${baceURL}/users`).then(res => res.json())


}