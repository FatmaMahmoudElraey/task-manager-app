import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export default {
  getTasks() {
    return axios.get(`${API_URL}`);
  },
  addTask(task) {
    return axios.post(`${API_URL}`, task);
  },
  updateTask(task) {
    return axios.put(`${API_URL}/${task.id}`, task);
  },
  deleteTask(taskId) {
    return axios.delete(`${API_URL}/${taskId}`);
  }
};
