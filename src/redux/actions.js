export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const filterProducts = (searchTerm) => ({
  type: "FILTER_PRODUCTS",
  payload: searchTerm,
});

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const addOrder = (order) => ({
  type: "ADD_ORDER",
  payload: order,
});
