import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useProductContext } from "../context/ProductContext";
import Card2 from "./Card2";
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const MyCarousal = () => {
  const { products } = useProductContext();
  return (
    <>
      <Wrapper>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {products.map((currEle) => {
            return <Card2 {...currEle} key={currEle.id} />;
          })}
        </Carousel>
        <div className="my-cau-btn">
        <NavLink to="/products">
          <Button>See All Product</Button>
          </NavLink>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
  .my-cau-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default MyCarousal;
