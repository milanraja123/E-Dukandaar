import FormatPrice from "../helpers/FormatPrice";
import { styled } from "styled-components";

const Card2 = (currEle) => {
  const { title, price, category, thumbnail } = currEle;
  return (
    <Wrapper>
    <div className="my-carousal">
      <div className="card">
        <figure>
          <img src={thumbnail} alt={title} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{title}</h3>
            <p className="card-data--price">
              <FormatPrice price={price} />
            </p>
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .my-carousal {
    max-width: 120rem;
    padding: 1rem;
    figure {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: all 0.5s linear;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.2s linear;
        cursor: pointer;
      }
      &:hover::after {
        width: 100%;
      }
      &:hover img {
        transform: scale(1.2);
      }
      img {
        max-width: 90%;
        margin-top: 1.5rem;
        height: 20rem;
        transition: all 0.2s linear;
      }
    }
  }
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;

    .card-data {
      padding: 0.25rem 1.5rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
  }
`;

export default Card2;
