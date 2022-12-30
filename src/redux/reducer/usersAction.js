import axios from "axios";
export const EDIT_LIST_USERS = "EDIT_LIST_USERS";
export const WHO_AM_I = "WHO_AM_I";


export const whoAmI = () => (dispatch) => {
    const token = localStorage.getItem('token');
    dispatch({
      type: WHO_AM_I,
      payload: {
        loading: true,
        data: false,
        errorMessage: false
      }
    });
  
    axios({
      method: 'get',
      url: "${import.meta.env.VITE_BASE_URL}/v1/whoami",
      timeout: 120000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      // console.log(response.data.data);
      dispatch({
        type: WHO_AM_I,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({
        type: WHO_AM_I,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
  } 

export const editListUsers = (id, formData) => (dispatch) => {
    console.log('formdata ', formData)
    dispatch({
      type: EDIT_LIST_USERS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
  
    // get API
    const token = localStorage.getItem("token");
    axios({
      method: "put",
      url: `${import.meta.env.VITE_BASE_URL}/v1/user`,
      data: formData,
      timeout: 120000,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      }
    })
    .then((response) => {
        console.log(response.data.data[0]);
        console.log(response);
        dispatch({
          type: EDIT_LIST_USERS,
          payload: {
            loading: false,
            data: response.data.data[0],
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({
          type: EDIT_LIST_USERS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };