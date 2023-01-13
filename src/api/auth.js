import axios from 'axios'

export const signup=async(data)=>{
    const config={headers:{"Content-Type":"application/json"}}
    const res=await axios.post('https://guvi-hackthon2-backend.vercel.app/api/auth/signup',data,config)
    return res;
}

export const signin=async(data)=>{
    const config={headers:{"Content-Type":"application/json"}}
    const res=await axios.post('https://guvi-hackthon2-backend.vercel.app/api/auth/signin',data,config)
    return res;
}