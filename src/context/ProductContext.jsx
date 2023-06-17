import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer.jsx";

const AppContext = createContext();

const initialState = {
  products: [],
  singleProduct:{},
  isLoading:false,
  isError:false,
  isAuthenticated:false,
};

const API = "https://dummyjson.com/products";

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({type:"SET_LOADING"})
    try {
      const res = await axios.get(url);
      const product = await res.data;
      
      dispatch({ type: "MY_API_DATA", payload: product.products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getAuthen = (val) => {
    return dispatch({type:"AUTHENTICATED_OR_NOT",payload:val})
  }

  const getSingleProduct = async (Url) => {
    console.log(Url,"getsingleProd")
    try {
      const res = await axios.get(Url);
      const resp = await res.data;
      console.log(resp,"context");
      
      dispatch({ type: "MY_SINGLE_PRODUCT", payload: resp}); 
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }

  useEffect(()=>{
    getProducts(API);
  },[])

  return (
    <AppContext.Provider value={{ ...state,getSingleProduct,getAuthen }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, AppContext, useProductContext };
