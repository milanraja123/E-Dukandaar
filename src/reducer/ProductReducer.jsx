const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":{
      return{
        ...state,
        isLoading:true,
      }
    }

    case "API_ERROR":{
      return{
        isLoading:false,
        isError:true,
      }
    }

    case "MY_API_DATA":
      return {
        ...state,
        products: action.payload,
        isLoading:true,
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
