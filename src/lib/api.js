import axios from 'axios';

const baseUrl = 'https://valorant-api.com/v1/agents';

export const getAllAgents = () => {
  return axios.get(baseUrl);
};

export const getSingleAgent = (uuid) => {
  return axios.get(`${baseUrl}/${uuid}`);
};