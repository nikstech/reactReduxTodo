import {GET_DETAILS} from "../type";

const initialState = {
  details: [
    {
      id: "1",
      name: "niklesh Tiwane",
      email: "tiwaneniklesh@gmail.com",
    },
    {
      id: "2",
      name: "Ashu Jagtap",
      email: "Ashu@yahoo.com",
    },
    {
      id: "3",
      name: "Pooja",
      email: "Pooja@redi.com",
    },
    {
      id: "5",
      name: "qq",
      email: "q@gmail.com",
    },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return state;
    default:
      return state;
  }
};

export default Reducer;