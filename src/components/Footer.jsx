
import {BrowserRouter as NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useProductContext } from "../context/ProductContext";

const Footer = () => {
  const {isAuthenticated} = useProductContext();
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink to={isAuthenticated ? "/contact" : "/login"}>
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Main footer */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Milan Store</h3>
           
            <p>@{new Date().getFullYear()} Milan Kumar. All Right Reserved</p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get recent updates</h3>
            <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
              <input type="email" name="Email" id="Email" style={{padding:"1rem 2rem"}}/>
              <input type="submit" value="Subscribe" className="footer-button" style={{padding:"1rem 2rem",fontSize:"1.5rem"}}/>
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaFacebook className="icons" />
              </div>
              <div>
                <a href="#/" target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call us</h3>
            <h3>+91 23456789</h3>
          </div>

        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    border: 1px solid black;
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
        .icons:hover{
          
          transform:scale(1.3);
          color:#ff4b2b;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
