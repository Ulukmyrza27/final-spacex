import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();
const INIT_STATE = {
  products: [],
  oneProduct: null,
  productsCount: 0,
};

const API = " http://localhost:8000/products";

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        productsCount: action.payload.headers["x-total-count"],
      };
    case "GET_ONE_PRODUCT":
      return {
        ...state,
        oneProduct: action.payload.data,
      };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function getProducts() {
    let result = await axios(API + window.location.search);
    dispatch({
      type: "GET_PRODUCTS",
      payload: result,
    });
  }
  async function addProducts(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function getOneProduct(id) {
    let result = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: result,
    });
  }
  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }
  async function updateComments(id, comments) {
    await axios.patch(`${API}/${id}`, { comments: comments });
    getOneProduct(id);
  }

  async function updateLikes(id, likes) {
    await axios.patch(`${API}/${id}`, { likes: likes });
    getOneProduct(id);
  }
  // Rating
  async function updateRating(id, ratings) {
    console.log(ratings);
    await axios.patch(`${API}/${id}`, { ratings: ratings });
    getOneProduct(id);
  }
  // Rating ends
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        types: state.types,
        oneProduct: state.oneProduct,
        productsCount: state.productsCount,
        addProducts,
        getProducts,
        deleteProduct,
        getOneProduct,
        updateProduct,
        updateComments,
        updateLikes,
        updateRating,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
