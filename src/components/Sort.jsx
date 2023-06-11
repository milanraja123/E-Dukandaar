
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  
  const {filter_products,sorting,} = useFilterContext();
 
  return (
    <Wrapper className="sort-selection">
      
      
      <div className="sort-selection">
        <form action="#">
        <label htmlFor="sort " className="label-data">Filter Product</label>
          <select name="sort" id="sort" className="sort-selection--style" onClick={sorting}>
            <option value="none" >None</option>
            <option value="#" disabled></option>
            <option value="lowest" >Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest" >Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
      <div className="product-data" style={{fontSize:"1.4rem",marginRight:"1.5rem"}}>
        <p>{filter_products.length} Product available </p>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
  .label-data{
   
    padding: 0.5rem;
  
    font-size:1.2rem;
    font-family: "Work Sans",sans-serif;
  }

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;


