const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    default:
      return state;

    case "GET_SORTED_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCT": {
      const { filter_products, sorting_value } = state;
      if (sorting_value !== "none") {
        let newSortData;

        let tempSortData = [...filter_products];

        const sortingProducts = (a, b) => {
          if (sorting_value === "lowest") {
            return a.price - b.price;
          }
          if (sorting_value === "highest") {
            return b.price - a.price;
          }
          if (sorting_value === "a-z") {
            return a.title.localeCompare(b.title);
          }
          if (sorting_value === "z-a") {
            return b.title.localeCompare(a.title);
          }
        };
        newSortData = tempSortData.sort(sortingProducts);

        return {
          ...state,
          filter_products: newSortData,
        };
      } else {
        return {
          ...state,
        };
      }
    }

    case "UPDATE_FILTER_VALUE": {
      const { name, val } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: val,
        },
      };
    }

    case "FILTER_PRODUCT": {
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currEle) => {
          return currEle.title.toLowerCase().startsWith(text);
        });
      }
     
      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    }
  }
};
export default filterReducer;
