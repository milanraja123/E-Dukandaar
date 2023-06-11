import { createContext, useReducer, useContext, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "none",
  filters: {
    text: "",
  },
};
// eslint-disable-next-line react/prop-types
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const sorting = (event) => {
    let userValue = event.target.value;
    return dispatch({ type: "GET_SORTED_VALUE", payload: userValue });
  };

  const updateFilterValue = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, val } });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({type:"FILTER_PRODUCT"})
    dispatch({ type: "SORTING_PRODUCT" });
  }, [products, state.sorting_value,state.filters]);

  return (
    <FilterContext.Provider value={{ ...state, sorting, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilterContext = () => {
  return useContext(FilterContext);
};
