const  baceURL='https://dummyjson.com'
export  const getPosts=async<T> ():Promise<T>=>await fetch(`${baceURL}/posts`).then(res=>res.json())