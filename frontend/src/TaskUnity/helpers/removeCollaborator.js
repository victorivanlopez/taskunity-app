import { clientAxios } from '../../config';

export const removeCollaborator = async (id, projectId, token) => {

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }

  try {
    const { data } = await clientAxios.post(`/projects/collaborators/${projectId}/remove`, { id }, options);
    return data;
  } catch (error) {
    return {
      message: error?.response?.data.message,
      error: true
    }
  }
}