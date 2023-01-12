import axios from "axios";

export const createEquipment = async (data) => {
  const response = await axios.post("/api/equipment", data);

  return response;
};

export const getEquipments = async () => {
  const res = await axios.get("/api/equipment");
  return res;
};

export const deleteEquipment = async (id) => {
  const res = await axios.delete(`/api/equipment/${id}`);
  return res;
};

export const getEquipmentsByCount = async () => {
  const res = await axios.get("/api/equipment/count");
  return res;
};

export const getEquipment = async (id) => {
  const config={headers:{"Content-Type":"application/json"}}
  const res = await axios.get(`/api/equipment/${id}`);
  return res;
};
export const updateEquipment = async (id,formData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  
  const res = await axios.put(`/api/equipment/${id}`,formData,config);
  return res;
};

