const  baceURL=import.meta.env.VITE_BASE_URL
export  const getAll=async<T,> (endpoint:string):Promise<T>=>await fetch(`${baceURL}${endpoint}`).then(res=>res.json())