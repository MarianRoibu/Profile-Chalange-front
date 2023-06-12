import { store } from "../../utils/store";


const updatePassword = async (newPassword, token) => {
    const { _id: userId } = store.getState().user.data;
    const formData = new FormData();
  
    formData.append('password', newPassword);
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/password/${userId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData
      });
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export default updatePassword;
  