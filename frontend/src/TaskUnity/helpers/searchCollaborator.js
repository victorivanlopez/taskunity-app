import { clientAxios } from '../../config';

export const searchCollaborator = async (email, token) => {

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }

  try {
    const { data } = await clientAxios.post('/projects/collaborators', {email}, options);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}