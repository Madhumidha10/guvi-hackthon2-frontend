import axios from 'axios'

export const newOrder = async (data) => {
	
    const res = await axios.post("/api/customer/order/new",data);
    return res;
  };