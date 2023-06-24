import { ButtonsContainer, CalculatorContainer, Column, Row } from './styles'

import OperatorButton from '../../components/OperatorButton'
import ValueButton from '../../components/ValueButton'
import EqualButton from '../../components/EqualButton'
import ResultScreen from '../../components/ResultScreen'
import ClearButton from '../../components/ClearButton'
import { useState, useRef } from 'react'

export default function Calculator(){
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);
    const resultAreaRef = useRef<HTMLDivElement>(null);

    const inputEquation = () => {
        if(inputRef.current) {
            setInputValue(inputRef.current.value)
            console.log(inputRef.current.value)
        }
    }

    // clear the sreen
    const clearAll = () => {
        setInputValue('');
        if(inputRef.current && 
           resultAreaRef.current
        ){
            inputRef.current.value = '';
            resultAreaRef.current.textContent = '';
        }
    }

    // clear only the result
    const clearResult = () => {
        if(resultAreaRef.current) resultAreaRef.current.textContent = '';;
    }

    //attr value to the equation
    const equationAttr = (
        event: React.MouseEvent<HTMLButtonElement | HTMLInputElement, MouseEvent>
    ) => {

        const buttonInput = event.currentTarget.querySelector('input[type="hidden"]');

        if(buttonInput) {
            const operator = (buttonInput as HTMLInputElement).value;

            if(inputRef.current) {
                inputRef.current.value += operator;
            }
        }else{
            if(inputRef.current) {
                const equationValue = event.currentTarget.value;
                inputRef.current.value += equationValue;
                setInputValue(inputRef.current.value);
            }
        }
    }
    
    //show the equation result
    const showResult = () => {
        const result = eval(inputValue);

        if(resultAreaRef.current) resultAreaRef.current.textContent = result;
        console.log(result);
    }

    return(
        <CalculatorContainer>
            <ResultScreen 
                inputRef={inputRef} 
                resultAreaRef={resultAreaRef}
                onChange={inputEquation}
            >
            </ResultScreen>

            <ButtonsContainer>
                <Row>
                    <ClearButton type='button' clearType='ce' onClick={clearAll}>
                        CE
                    </ClearButton>

                    <ClearButton type='button' clearType='c' onClick={clearResult}>
                        C
                    </ClearButton>
                </Row>
                <Row>
                    {/* Value buttons */}

                    <Column>
                        <Row>
                            <ValueButton value='7' onClick={equationAttr}/>
                            <ValueButton value='8' onClick={equationAttr}/>
                            <ValueButton value='9' onClick={equationAttr}/>
                        </Row>
                        <Row>
                            <ValueButton value='4' onClick={equationAttr}/>
                            <ValueButton value='5' onClick={equationAttr}/>
                            <ValueButton value='6' onClick={equationAttr}/>
                        </Row>
                        <Row>
                            <ValueButton value='1' onClick={equationAttr}/>
                            <ValueButton value='2' onClick={equationAttr}/>
                            <ValueButton value='3' onClick={equationAttr}/>
                        </Row>

                        <Row>
                            <ValueButton fullWidth value='0' onClick={equationAttr}/>
                            <ValueButton value='.' onClick={equationAttr}/>
                        </Row>
                    </Column>
                    
                    {/* Operator buttons */}
                    <Column>
                        <OperatorButton name={'division'} value={'/'} onClick={equationAttr}>
                            ÷
                        </OperatorButton>
                        <OperatorButton name={'multiply'} value={'*'} onClick={equationAttr}>
                            x
                        </OperatorButton>
                        <OperatorButton name={'subsubtraction'} value={'-'} onClick={equationAttr}>
                            -
                        </OperatorButton>
                        <OperatorButton name={'summ'} value={'+'} onClick={equationAttr}>
                            +
                        </OperatorButton>
                    </Column>
                </Row>


                {/* Equal button */}
                <Row>
                    <EqualButton onClick={showResult}>=</EqualButton>
                </Row>

            </ButtonsContainer>
        </CalculatorContainer>
    )
}