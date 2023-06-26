import { useState, useRef } from 'react';
import Image from 'next/image';

import { ButtonsContainer, CalculatorContainer, Column, Row } from './styles';

import OperatorButton from '../../components/Calculator/OperatorButton';
import ValueButton from '../../components/Calculator/ValueButton';
import EqualButton from '../../components/Calculator/EqualButton';
import ResultScreen from '../../components/Calculator/ResultScreen';
import ClearButton from '../../components/Calculator/ClearButton';
import BackspaceButton from './BackspaceButton';

export default function Calculator(){
    const [inputValue, setInputValue] = useState<string>('');
    const [resultValue, setResultValue] = useState<number | string>('');

    const inputRef = useRef<HTMLInputElement>(null);
    const resultAreaRef = useRef<HTMLDivElement>(null);

    const inputEquation = () => {
        if(inputRef.current) setInputValue(inputRef.current.value);
    }

    // clear the screen
    const clearAll = () => {
        if(inputRef.current && resultAreaRef.current){
            setInputValue('');
            setResultValue('');
            inputRef.current.value = '';
            resultAreaRef.current.textContent = '';
        }
    }

    // clear only the result
    const clearResult = () => {
        setResultValue('')
        if(resultAreaRef.current) resultAreaRef.current.textContent = String(resultValue);
    }

    //backspace function
    const backspaceClear = () => {
        const eqStr = inputValue;
        const cldStr = eqStr.slice(0, -1);

        setInputValue(cldStr);
        if(inputRef.current) inputRef.current.value = cldStr;
    }

    //attr value to the equation
    const equationAttr = (
        event: React.MouseEvent<HTMLButtonElement | HTMLInputElement, MouseEvent>
    ) => {
        const buttonInput = event.currentTarget.querySelector('input[type="hidden"]');

        if(inputRef.current){
            if(buttonInput) {
                const operator = (buttonInput as HTMLInputElement).value;
                inputRef.current.value += operator;
            }else{
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

                    <BackspaceButton onClick={backspaceClear} />
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