import styled from 'styled-components';

export const CalculatorContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 213px;
    border-radius: 13px;
    overflow: hidden;
    background-color: #1E1D1D;
    box-shadow: 10px 10px 30px 0px rgba(174, 174, 192, 0.096);
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: center;
    padding: 13px;
    width: 100%;
    border-radius: 13px;
    background-color: #F2F2F4;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7px;
    align-items: center;
    width: 100%;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: center;
`