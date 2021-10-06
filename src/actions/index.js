import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

//create a thunk action object

export const getPerson = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        dispatch(fetchSuccess(res.data.results[0]));
      })
      .catch((err) => {
        dispatch(fetchFail(err.message));
      });
  };
};

export const fetchStart = () => ({ type: FETCH_START });

export const fetchSuccess = (person) => ({
  type: FETCH_SUCCESS,
  payload: person,
});

export const fetchFail = (error) => ({ type: FETCH_FAIL, payload: error });
