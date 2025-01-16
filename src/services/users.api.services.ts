const  baceURL='https://dummyjson.com'
export  const getUsers=async ()=>await fetch(`${baceURL}/users`).then(res=>res.json())