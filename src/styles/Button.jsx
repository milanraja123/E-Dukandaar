import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 16px 50px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
    
    &:hover{
        transform: scale(0.93);
        box-shadow: 0 2rem 2rem 0 rgb(255, 75, 43 / 30%);
    }
    &:active{
        transform: scale(0.93);
        box-shadow: 0 2rem 2rem 0 rgb(255, 75, 43 / 30%);
    }
    &:focus {
        outline: none;
    }
 `;