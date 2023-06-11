import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../context/ProductContext";
import Swal from "sweetalert2";

const Contact = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useProductContext();
  const handlePopUp = () => {
    Swal.fire(
      'Great..',
      'We will contact to you as soon as possible',
      'success'
    )
  }
  if (isAuthenticated) {
    return (
      <>
        <Wrapper>
          <h2 className="common-heading">Contact Page</h2>

          <iframe
            title="This is a unique title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.923275294937!2d86.27161641479653!3d22.805306685063535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e30ff76d3319%3A0x4986ace5ea086802!2sRVS%20College%20Of%20Engineering%20And%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1680030224647!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="container">
            <div className="contact-form">
              <form action="#" className="contact-inputs" onSubmit={(e)=>{e.preventDefault();
              handlePopUp();}}>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  autoComplete="off"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />
                <textarea
                  name="Message"
                  cols="30"
                  rows="10"
                  placeholder="Enter your message"
                  autoComplete="off"
                  required
                />
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </Wrapper>
      </>
    );
  } else {
    navigate("/login");
  }
};

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          input[type="submit"] {
            cursor: pointer;
            background:#ff4b2b;
            padding: 1.2rem 1.8rem;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid #ff4b2b};
              color: ${({ theme }) => theme.colors.white};
              box-shadow: 0 2rem 2rem 0 rgb(255, 75, 43/ 35%);
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
