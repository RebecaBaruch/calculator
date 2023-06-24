import NextLink from 'next/link';
import styled from 'styled-components';

import { MyLinkProps } from "../../interfaces/CalculatorProps";


export const StyledLink = styled(NextLink)<MyLinkProps>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3px;
    align-items: center;

    margin-top: 33px;
    padding: 13px 73px;
    width: fit-content;
    border-radius: 9px;

    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 700;
    background-color: #b70effa8;
`;