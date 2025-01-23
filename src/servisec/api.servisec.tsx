const  baceURL='https://dummyjson.com'
console.log(baceURL)
export const getUsers = async <T>(): Promise<T> => {
    return    await fetch(`${baceURL}/users`).then(res => res.json())


}