import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { GiHamburgerMenu } from "react-icons/gi";

import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import { useProductContext } from "../context/ProductContext";
import { auth } from "../Authentication/Firebase";

const Navbar = () => {
  const { getAuthen, isAuthenticated } = useProductContext();
  const navigate = useNavigate();
  const alert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "LogOut!",
          "You have succesfully logout",
          "success",

          handlelogOut()
        );
      }
    });
  };
  const handlelogOut = () => {
    console.log("Yes");
    signOut(auth)
      .then(() => {
        getAuthen(false);
        setTimeout(() => {
          navigate("/");
          console.log("setTimeout")
        }, 2000);
      })
      .catch((error) => {
        console.log("Error in signing out -> ", error);
      });
  };
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <Wrapper>
        <nav className="main-nav">
          {/* 1st logo part  */}
          <div className="logo">
            <h2>
              <span>M</span>ilan
              <span>S</span>tore
            </h2>
          </div>

          {/* 2nd menu part  */}
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }
          >
            <ul>
              <li>
                <NavLink to="/" className="Nav-btns" >Home</NavLink>
              </li>
              <li>
                <NavLink to={isAuthenticated ? "/about" : "/login"} >About</NavLink>
              </li>
              <li>
                <NavLink to={isAuthenticated ? "/products" : "/login"} >
                  
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink to={isAuthenticated ? "/contact" : "/login"} >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 3rd social media links */}
          <div className="social-media">
            <NavLink to={isAuthenticated?"#":"/login"}>
            <Button onClick={isAuthenticated?alert:null}>
              {isAuthenticated ? "LogOut" : "LogIn"}
            </Button>
            </NavLink>
            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .main-nav {
    background:rgb(241, 242, 246);
    width: 100vw;
    height: 12rem;
    display: grid;
    grid-template-columns: 10rem 1fr 2fr 1fr 10rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  


  .logo {
    display: grid;
    /* background-color: #3b5998; */
    grid-column: 2/3;
    justify-content: start;
    align-items: center;
  }

  .menu-link {
    grid-column: 3/4;
  }

  .menu-link ul {
    height: 12rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .social-media {
    display: grid;
    ${"" /* grid-column: 4/5; */}
    place-items:  center;
  }

  /* ----------- Grid part ends ----------------- */

  .logo h2 {
    font-size: 2.5rem;
    font-weight: 500;
    text-transform: uppercase;
    background: -webkit-linear-gradient(#d1b8b8, rgb(228, 61, 31));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .logo h2 span {
    font-size: 3.5rem;
  }

  .menu-link ul li {
    font-size: 1.8rem;
    font-weight:bold;
  }

  .menu-link ul li  {
    text-transform: capitalize;
    color: #0a1435
    transition: 0.5s;
  }
  .menu-link ul li:hover > a {
    transform-origin: left;
    color: #ff4b2b;
    
    transition: 0.5s;
  }

  .social-media ul li {
    font-size: 1.8rem;
  }

  .social-media .hamburger-menu {
    display: none;
  }

  .facebook {
    color: #3b5998;
  }

  .instagram {
    color: #c32aa3;
  }

  .youtube {
    color: #ff0000;
  }

  /* hero section   */

  .hero-section {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .hero-section p {
    font-size: 3rem;
    text-transform: capitalize;
  }

  .hero-section h1 {
    font-size: 5rem;
    text-transform: uppercase;
    text-align: center;
  }

  /* responsive css style  */
  @media (max-width: 1080px) {
    .main-nav {
      height: 8rem;
      grid-template-columns: 2rem 3fr 3fr 1fr 2rem;
    }

    .logo,
    .menu-link ul,
    .social-media ul {
      height: 8rem;
    }
  }

  /* responsive css style  */
  @media (max-width: 998px) {
    .main-nav {
      height: 7rem;
      grid-template-columns: 2rem 2fr 3fr 2rem 2rem;
    }

    .menu-link {
      display: none;
    }

    .logo,
    .social-media ul {
      height: 7rem;
    }

    .mobile-menu-link {
      grid-column: 2/4;
      position: relative;
      z-index: 99;
    }

    .mobile-menu-link {
      background-color: white;
      height: 20rem;
      display: grid;
      grid-column: 2/5;
      align-items: center;
      padding-left: 3rem;
      transition: all 2s linear;
      transform-origin: top;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }

    .mobile-menu-link ul {
      height: 20rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: start;
    }

    .mobile-menu-link ul li:first-child {
      transition-delay: 0.2s;
    }

    .social-media {
      grid-row: 1/2;
      grid-column: 3/5;
      justify-items: end;
      align-items: center;
      transition: all 2s linear;
    }

    .social-media .social-media-desktop {
      height: 0;
      display: none;
    }

    .social-media {
      height: 7rem;
      display: flex;
      justify-self: end;
      align-items: center;
    }

    .social-media .hamburger-menu {
      display: block;
      font-size: 2.5rem;
    }
  }

  @media (max-width: 798px) {
    .main-nav {
      height: 6rem;
      grid-template-columns: 1rem 2fr 1fr 1fr 1rem;
    }

    .logo,
    .social-media ul {
      height: 6rem;
    }

    .social-media {
      height: 6rem;
      display: flex;
      justify-self: end;
      align-items: center;
    }

    .social-media .hamburger-menu {
      display: block;
      font-size: 2.5rem;
    }
  }

  @media (max-width: 520px) {
    .main-nav {
      height: 6rem;
      grid-template-columns: 1rem 4fr 1fr 1fr 1rem;
    }

    .logo,
    .social-media ul {
      height: 6rem;
    }

    .logo h2 {
      font-size: 2rem;
    }

    .social-media {
      height: 6rem;
      display: flex;
      justify-self: end;
      align-items: center;
    }

    .social-media .hamburger-menu {
      display: block;
      font-size: 2.5rem;
    }

    /* hero section  */

    .hero-section h1 {
      font-size: 3.8rem;
    }
  }
`;

export default Navbar;
