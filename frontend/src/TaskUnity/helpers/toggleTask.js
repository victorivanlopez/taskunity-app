import { clientAxios } from '../../config';

export const toggleTask = async (id, token) => {

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }

  try {
    const { data } = await clientAxios.post(`/tasks/toggle/${id}`, {}, options);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}