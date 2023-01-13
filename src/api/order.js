import axios from 'axios'

export const newOrder = async (data) => {
	
    const res = await axios.post("https://guvi-hackthon2-backend.vercel.app/api/customer/order/new",data);
    return res;
  };