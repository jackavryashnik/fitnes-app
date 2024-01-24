import axios from 'axios';

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

export async function fetchData(filter, params = {}) {
  try {
    const response = await axios.get(`/filters?filter=${filter}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
