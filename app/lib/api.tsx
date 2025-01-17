import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vws-be.onrender.com', // Adjust the baseURL to your backend server
  // baseURL: 'http://localhost:5000'
});

export const updateItem = async (id: any, data: { count: number }) => {
  try {
    const user = id 
    const response = await api.post(`/getItem`, { user});
    return response.data;
  } catch (error) {
    console.error('Failed to update item', error);
    throw error;
  }
};

export const getItem = async (id: string) => {
    try{
      const response = await api.get(`/items/${id}`);
      return response.data
    } catch (error) {
      console.error("Failed to get item", error);
      throw error;
    }
}