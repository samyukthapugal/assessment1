import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

const UserService = {
  async getUsers() {
    try {
      const response = await axios.get(`${baseURL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
};

export default UserService;