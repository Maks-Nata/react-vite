const  baceURL=import.meta.env.VITE_BASE_URL
export  const getPosts=async ()=>await fetch(`${baceURL}/posts`).then(res=>res.json())