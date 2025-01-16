const  baceURL='https://dummyjson.com'
export  const getPosts=async ()=>await fetch(`${baceURL}/posts`).then(res=>res.json())