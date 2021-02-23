import axios from 'axios'
import { Octokit } from "@octokit/rest";
import firebase from './firebaseCredentials';

const username = "monteiromarceloc"
const token = "dad24703c1fa8f750b6e2b3766e91f1bced8a180"
const org = "studiosol"
const mediaType = { previews: ['inertia'] }
const ccid = 6132089
const db = firebase.database();

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: token });

export const apiService = {
  getProjects: async () => {
    try {
      const response = await octokit.request('GET /orgs/{org}/projects', { org, mediaType })
      console.log('getProjects: ', response)
      return response.data.map(e => ({
        id: e.id,
        name: e.name,
      }));
    } catch (error) {
      console.log('getProjects error: ', JSON.stringify(error))
    }
  },

  getColumns: async (project_id) => {
    try {
      const response = await octokit.request('GET /projects/{project_id}/columns', {
        project_id: ccid, mediaType
      });
      const payload = response.data.map(e => ({
        id: e.id,
        name: e.name,
      }));
      db.ref('columns').get().then((snap) => {
        if (snap.exists()) {
          const FBColumns = Object.values(snap.val());
          console.log('FBColumns: ', FBColumns);
        } else {
          console.log('FBColumns empty');
          payload.forEach(e => db.ref(`columns/${e.id}`).set({ name: e.name }));
        }
      })
      return payload;
    } catch (error) {
      console.log('getColumns error: ', error)
    }
  },
  getCards: async (column_id) => {
    try {
      const response = await octokit.request('GET /projects/columns/{column_id}/cards', {
        column_id, mediaType
      });

      // COMPARAÇÃO COM ESTADO ANTERIOR
      const snap = await db.ref(`columns/${column_id}/cards`).get()
      if (snap.exists()) {
        const cards = snap.val();
        console.log('FBCards: ', cards);

        let responsePayload = response.data.map((e, i) => ({
          ...e,
          new: !cards[e.id]
        }));
        return responsePayload;
      }
      else {
        console.log('FBCards empty');
        const payload = response.data.map(e => ({
          id: e.id,
          issue_number: e.content_url?.split('/').slice(-1)[0],
          repo: e.content_url?.split('/').slice(-3)[0]
        }));
        payload.forEach(e => db.ref(`columns/${column_id}/cards/${e.id}`).set(e));
      }
      return response.data;
    } catch (error) {
      console.log('getCards error: ', error)
    }
  },

  getIssue: async (repo, issue_number) => {
    try {
      const response = await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
        owner: org,
        repo,
        issue_number,
        mediaType
      });
      return response.data;
    } catch (error) {
      console.log('getIssue error: ', error)
    }
  },

  updateFB: async (column_id, cards) => {
    try {
      console.log(column_id, ':', cards);
    } catch (error) {
      console.log('updateFB error: ', error)
    }
  }
}
