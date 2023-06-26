import { ButtonHTMLAttributes } from "react";
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    cleartype: "ce" | "c";
}

export const Button = styled.button<ButtonProps>`
    width: 100%;
    height: 43px;
    outline: none;

    border: none;
    border-radius: 7px;
    color: ${props => (props.cleartype == 'ce' ? '#fb4300' : '#ffb703')};
    font-size: 23px;
    font-weight: 700;
    background-color: #F0F0F3;
    box-shadow: 10px 10px 30px 0px rgba(174, 174, 192, 0.40);
    
    cursor: pointer;
`