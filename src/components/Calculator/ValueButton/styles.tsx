import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    fullwidth?: boolean | undefined;
}
  

export const Button = styled.input<ButtonProps>`
    width: ${props => (props.fullwidth ? '100%' : '43px') };
    height: 43px;
    
    outline: none;
    border: none;
    border-radius: 7px;
    
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 33px;
    font-weight: bold;
    color: #728AB7;
    background-color: #F0F0F3;
    box-shadow: 10px 10px 30px 0px rgba(174, 174, 192, 0.40);
    
    cursor: pointer;
`