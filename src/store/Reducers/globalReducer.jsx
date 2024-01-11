const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    // handle actions for global reducer
    default:
      return state;
  }
};

export default globalReducer;
