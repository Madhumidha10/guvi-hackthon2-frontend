import axios from 'axios'
export const contact=async(data)=>{
    const config={headers:{"Content-Type":"application/json"}}
    const res=await axios.post('/api/contact',data,config)
    return res;
}