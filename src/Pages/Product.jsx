import styled from "styled-components";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";
import FilteredData from "../components/FilteredData";
import { useProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";


const Product = () => {
  const navigate = useNavigate();
const {isAuthenticated} = useProductContext();
    if(isAuthenticated){
      
    
  return (
    <>
      <Wrapper>
        <div className="grid grid-filter-column container">
          <div>
            <FilteredData />
          </div>

          <section className="product-view--sort">
            <div className="sort-filter">
              <Sort />
            </div>
            <div className="main-product">
              <ProductList />
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
  }else{
    return(<>
    {navigate("/login")}
    </>)
  }
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Product;
