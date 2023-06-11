const ProductReducer = (state, action) => {
  switch (action.type) {
    case "MY_API_DATA":
      return {
        ...state,
        products: action.payload,
      };

    case "MY_SINGLE_PRODUCT": {
      console.log(action.payload, "reducer");
      return {
        ...state,
        singleProduct: action.payload,
      };
    }

    case "AUTHENTICATED_OR_NOT":{
      return{
        ...state,
        isAuthenticated:action.payload,
      }
    }
  }
};

export default ProductReducer;
