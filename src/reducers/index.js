import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";
const initialState = {
  person: {
    name: {
      title: "Mr",
      first: "Silas",
      last: "Petersen",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg",
    },
  },
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        person: {},
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        person: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        person: {},
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;