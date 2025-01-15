const  baceURL=import.meta.env.VITE_BASE_URL
export  const getUsers=async ()=>await fetch(`${baceURL}/users`).then(res=>res.json())