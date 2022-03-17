import axios from "axios";


export const getNewsByCategory = async (catigory) => {

  try {
    const res = await axios.get(`http://universities.hipolabs.com/search?country=${catigory}`);
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
