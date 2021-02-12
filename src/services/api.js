import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/'
})

const username = "monteiromarceloc"
const token = "95f492baab81e16e9db4e420e649d06a580ef5fd"
const org = "studiosol"

export const apiService = {
  getRepos: async () => {
    try {
      const response = await api.get(`/users/${username}/repos?type=owner`);
      console.log('response: ', response.data)
      return response.data;
    } catch (error) {
      console.log('getRepos error: ', error)
    }
  }
}