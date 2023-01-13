import axios from "axios";

export const getNewArrivals = async (sortBy = -1, limit = 3) => {
  const res = await axios.get(`https://guvi-hackthon2-backend.vercel.app/api/filter?sortBy=${sortBy}&limit=${limit}`);

  return res;
};

export const getProductsByFilter = async (arg) => {
  const res = await axios.post("https://guvi-hackthon2-backend.vercel.app/api/filter/search", arg);

  return res;
};

export const getServices = async () => {
	
  const res = await axios.get("https://guvi-hackthon2-backend.vercel.app/api/filter/services");
  return res;
};
