import axios from "axios";

export const getNewArrivals = async (sortBy = -1, limit = 3) => {
  const res = await axios.get(`/api/filter?sortBy=${sortBy}&limit=${limit}`);

  return res;
};

export const getProductsByFilter = async (arg) => {
  const res = await axios.post("/api/filter/search", arg);

  return res;
};

export const getServices = async () => {
	
  const res = await axios.get("/api/filter/services");
  return res;
};
