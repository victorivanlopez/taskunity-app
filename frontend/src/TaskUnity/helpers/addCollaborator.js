import { clientAxios } from '../../config';

export const addCollaborator = async (email, projectId, token) => {

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }

  try {
    const { data } = await clientAxios.post(`/projects/collaborators/${projectId}`, { email }, options);
    return data;
  } catch (error) {
    return {
      message: error?.response?.data.message,
      error: true
    }
  }
}