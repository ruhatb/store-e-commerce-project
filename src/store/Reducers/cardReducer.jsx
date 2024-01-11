const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    // handle actions for shopping cart reducer
    default:
      return state;
  }
};

export default shoppingCartReducer;
