import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import { useProductContext } from "../context/ProductContext";

const HeroSection = () => {
  const {isAuthenticated} = useProductContext();
  return(
    <>
      <Wrapper>
      <div className="container2">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h1 className="intro-data">Welcome to</h1>
            <h2>
              milan store
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              saepe aliquam vel consequuntur doloremque possimus dolorem
              impedit, labore neque quis.
            </p>
            <NavLink to={isAuthenticated?"/products":"/login"}>
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src={"https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/57.png?itok=iesjjdzJ"}
                alt="Image"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
    </>
  )
}


const Wrapper = styled.section`

  padding: 12rem 0;
  margin-top:5rem;
  
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .container2 {
    max-width: 106rem;
    margin: 0 auto;
  }
  .hero-section-data {
    border-radius: 0.8rem;
    padding: 5rem;
    

    p {
      margin: 2rem 0;
      font-size: 1.5rem;
    }
    h1 {
      font-weight: bold;
      font-size: 1.5rem;
    }
    h2 {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 3rem;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(255, 75, 43, 0.6);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;

