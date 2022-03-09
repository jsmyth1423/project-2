import axios from 'axios';

const baseUrl = 'https://valorant-api.com/v1/agents';

export const getAllAgents = () => {
  return axios.get(baseUrl);
};
