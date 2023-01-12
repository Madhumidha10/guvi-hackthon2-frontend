import axios from 'axios'

export const createCategory=async(formData)=>{
    const config={headers:{"Content-Type":"application/json"}}
    const res=await axios.post('/api/category',formData,config)
    return res;
}


export const getCategories=async()=>{

    const res=await axios.get('/api/category')
    return res;
}
export const getCategory=async(id)=>{

    const res=await axios.get(`/api/category/:${id}`)
    return res;
}