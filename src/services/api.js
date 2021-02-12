import axios from 'axios'
import { Octokit } from "@octokit/rest";

const username = "monteiromarceloc"
const token = "95f492baab81e16e9db4e420e649d06a580ef5fd"
const org = "studiosol"
const mediaType = { previews: ['inertia'] }
// const axiosApi = axios.create({
//   baseURL: 'https://api.github.com/',
//   headers: {
//     'X-Custom-Header': 'foobar'
//   }
// })

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: token });

export const apiService = {
  getProjects: async () => {
    try {
      const response = await octokit.request('GET /users/{username}/projects', {username, mediaType})
      console.log('response: ', response)
      return response.data;
    } catch (error) {
      console.log('getProjects error: ', error)
    }
  }
}