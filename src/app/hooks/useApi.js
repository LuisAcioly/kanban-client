import axios from "axios";
import { getToken } from "../utils/auth";

export const api = axios.create({
    baseURL: "http://localhost:8000"
});

export const useApi = () => ({
    
    login: async (username, password) => {
        const response = await api.post('/login', {
            username: username,
            password: password
        }).catch((error) => {
            return error;
        });

        return response.data;
    },

    logout: async () => {
        return null;
    },

    signUp: async (username, password) => {
        const response = await api.post('/sign-up', {
            username: username,
            password: password
        }).catch((error) => {
            return error;
        });

        return response.data;
    },
   
    createWorkspace: async (name, userId) => {
        const token = localStorage.getItem('authToken');
        const response = await api.post('/workspace/store', 
            { name, userId },
            { headers: {Authorization: token}}
        ).catch((error) => {
            return error.response;
        });

        return response;
    },

    createBoards: async (name, workspaceId) => {
        const token = localStorage.getItem('authToken');
        const response = await api.post('/board/store', 
            { name, workspaceId },
            { headers: {Authorization: token}}
        ).catch((error) => {
            return error.response;
        });

        return response;
    },

    getWorkspacesBoards: async (id) => {
        const token = localStorage.getItem('authToken');
        const response = await api.get('/board/get-workspace-boards',{
            params: { id },
            headers: {Authorization: token}
        }).catch((error) => {
            return error.response;
        });

        return response;
    },

    getUserWorkspaces: async (id) => {
        const token = localStorage.getItem('authToken');
        const response = await api.get('/workspace/get-user-workspaces',{
            params: { id },
            headers: {Authorization: token}
        }).catch((error) => {
            return error.response;
        });

        return response;
    },

    getWorkspaceUsers: async (id) => {
        const token = localStorage.getItem('authToken');
        const response = await api.get('/workspace/get-workspace-users',{
            params: {id},
            headers: {Authorization: token}
        }).catch((error) => {
            return error.response;
        });

        return response;
    },

    updateWorkspaceUsers: async (id, users) => {
        const token = localStorage.getItem('authToken');
        const response = await api.post('/workspace/update-workspace-users', 
            { id, users },
            { headers: {Authorization: token}}
        ).catch((error) => {
            return error.response;
        });

        return response;
    },

    updateWorkspaceName: async (id, name) => {
        const token = localStorage.getItem('authToken');
        const response = await api.put('/workspace/edit-workspaces', 
            { id, name },
            { headers: {Authorization: token}}
        ).catch((error) => {
            return error.response;
        });

        return response;
    },

    getWorkspace: async (id) => {
        const token = localStorage.getItem('authToken');
        const response = await api.get('/workspace/get-workspace',{
            params: {id},
            headers: {Authorization: token}
        }).catch((error) => {
            return error.response;
        });

        return response;
    },

    getUsers: async () => {
        const token = localStorage.getItem('authToken');
        const response = await api.get('/get-users',{
            headers: {Authorization: token}
        }).catch((error) => {
            return error.response;
        });
        return response;
    }
})