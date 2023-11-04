import { clientAxios } from '../../config';

export const deleteProject = async (id, token) => {

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }

  try {
    const { data } = await clientAxios.delete(`/projects/${id}`, options);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}