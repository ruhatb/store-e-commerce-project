const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // handle actions for product reducer
    default:
      return state;
  }
};

export default productReducer;
