import axios from 'axios';
import { loader } from './utils';

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

export async function fetchData(path, params = {}) {
  loader.classList.remove('hidden');

  try {
    const response = await axios.get(`/${path}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    loader.classList.add('hidden');
  }
}

export async function patchData(path, params = {}) {
  loader.classList.remove('hidden');
  try {
    const response = await axios.patch(`/${path}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    loader.classList.add('hidden');
  }
}

export async function postData(path, params = {}) {
  loader.classList.remove('hidden');
  try {
    const response = await axios.post(`/${path}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    loader.classList.add('hidden');
  }
}
