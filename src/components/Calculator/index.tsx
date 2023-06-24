import { useState, useRef } from 'react';

import { ButtonsContainer, CalculatorContainer, Column, Row } from './styles';

import OperatorButton from '../../components/Calculator/OperatorButton';
import ValueButton from '../../components/Calculator/ValueButton';
import EqualButton from '../../components/Calculator/EqualButton';
import ResultScreen from '../../components/Calculator/ResultScreen';
import ClearButton from '../../components/Calculator/ClearButton';

export default function Calculator(){
    const [inputValue, setInputValue] = useState<string>('');
    const [resultValue, setResultValue] = useState<number | string>('');

    const inputRef = useRef<HTMLInputElement>(null);
    const resultAreaRef = useRef<HTMLDivElement>(null);

    const inputScreen = inputRef.current;
    const resultScreen = resultAreaRef.current;

    const inputEquation = () => {
        if(inputScreen) setInputValue(inputScreen.value);
    }

    // clear the screen
    const clearAll = () => {
        if(inputScreen && resultScreen){
            setInputValue('');
            setResultValue('');
            inputRef.current.value = '';
            resultAreaRef.current.textContent = '';
        }
    }

    // clear only the result
    const clearResult = () => {
        setResultValue('')
        if(resultScreen) resultScreen.textContent = String(resultValue);
    }

    //attr value to the equation
    const equationAttr = (
        event: React.MouseEvent<HTMLButtonElement | HTMLInputElement, MouseEvent>
    ) => {
        const buttonInput = event.currentTarget.querySelector('input[type="hidden"]');

        if(inputScreen){
            if(buttonInput) {
                const operator = (buttonInput as HTMLInputElement).value;
                inputRef.current.value += operator;
            }else{
                if(inputScreen) {
                    const equationValue = event.currentTarget.value;
                    inputRef.current.value += equationValue;
                    setInputValue(inputRef.current.value);
                }
            }
        }
    }
    
    //show the equation result
    const showResult = () => {
        const result = eval(inputValue);
        if(resultScreen) resultAreaRef.current.textContent = result;
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
                    <ClearButton type='button' cleartype='ce' onClick={clearAll}>
                        CE
                    </ClearButton>

                    <ClearButton type='button' cleartype='c' onClick={clearResult}>
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
                            <ValueButton fullwidth={true} value='0' onClick={equationAttr}/>
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