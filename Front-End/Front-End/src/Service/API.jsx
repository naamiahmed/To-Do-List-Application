import axios from 'axios';

const baseURL = 'http://localhost:5000';

const api = axios.create({
  baseURL,
});

export const TaskService = {
  getAllTasks: async () => {
    const response = await api.get('/tasks/get');
    return response.data;
  },

  createTask: async (taskData) => {
    const response = await api.post('tasks/create', taskData);
    return response.data;
  },

  updateTask: async (id, updates) => {
    const response = await api.put(`tasks/update/${id}`, updates);
    return response.data;
  },

  deleteTask: async (id) => {
    await api.delete(`tasks/delete/${id}`);
  }
};