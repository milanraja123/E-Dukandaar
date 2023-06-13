
import HeroSection from "../components/HeroSection";
import MyCarousal from "../components/MyCarousal";
import Services from "../components/Services";
import { useProductContext } from "../context/ProductContext";


const Home = () => {
  const {isAuthenticated} = useProductContext();
  
 
  return (
    <>
      <HeroSection />
      {isAuthenticated ? <MyCarousal /> : ""}
     
      <Services />
    </>
  );
};

export default Home;
