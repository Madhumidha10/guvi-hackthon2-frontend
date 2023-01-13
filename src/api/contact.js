import axios from 'axios'
export const contact=async(data)=>{
    const config={headers:{"Content-Type":"application/json"}}
    const res=await axios.post('https://guvi-hackthon2-backend.vercel.app/api/contact',data,config)
    return res;
}