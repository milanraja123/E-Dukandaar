
import LoginPage from "./components/LoginPage";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./Pages/Product";
import SingleProductPage from "./Pages/SingleProductPage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
// import { signOut } from "firebase/auth";

const App = () => {
  

  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98,84,243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg,rgb(132,144,255)  0%,rgb(98,189,252) 100%",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },

    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/products" element={<Product />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/singleproduct/:id"
              element={<SingleProductPage />}
            ></Route>
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
