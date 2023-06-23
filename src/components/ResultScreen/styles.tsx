import styled from 'styled-components';

export const ScreenContainer = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: column;
    gap: 7px;
    align-items: center;
    padding: 13px;
    height: 133px;
    width: 100%;
    border-radius: 13px 13px 0 0;
    background-color: #1E1D1D;
`

export const ValuesInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    text-align: right;
    font-size: 23px;
    font-weight: 500;
    color: #52627F;
    background-color: transparent;
`

export const ResultArea = styled.div`
    text-align: right;
    font-size: 43px;
    font-weight: 700;
    color: #F2F2F4;
`