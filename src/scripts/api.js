import axios from 'axios';

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

export async function fetchData(path, params = {}) {
  try {
    const response = await axios.get(`/${path}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function patchData(path, params = {}) {
  try {
    const response = await axios.patch(`/${path}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function postData(path, params = {}) {
  try {
    const response = await axios.post(`/${path}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
