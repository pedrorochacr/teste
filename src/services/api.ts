import axios from 'axios';

const BACKEND_URL = 'https://service-h7training.onrender.com';

async function get(url: string) {
  let response;
  try {
    response = await axios.get(BACKEND_URL + url);
  } catch (e: any) {
    throw e;
  }
  return response?.data;
}

async function post(url: string, data: any) {
  let response;
  try {
    response = await axios.post(BACKEND_URL + url, data);
  } catch (e: any) {
    throw e;
  }
  return response?.data;
}

async function put(url: string, data?: any) {
  let response;
  try {
    response = await axios.put(BACKEND_URL + url, data);
  } catch (e: any) {
    throw e;
  }
  return response?.data;
}

async function deleteRequest(url: string) {
  let response;
  try {
    response = await axios.delete(BACKEND_URL + url);
  } catch (e: any) {
    throw e;
  }
  return response?.data;
}

export const API = {
  get,
  post,
  put,
  delete: deleteRequest,
};
