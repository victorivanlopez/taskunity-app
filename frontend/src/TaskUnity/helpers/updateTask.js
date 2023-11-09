import { clientAxios } from '../../config';

export const updateTask = async (task, token) => {

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }

  try {
    const { data } = await clientAxios.put(`/tasks/${task.id}`, task, options);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}