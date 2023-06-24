import { ButtonsContainer, CalculatorContainer, Column, Row } from './styles'

import OperatorButton from '../../components/OperatorButton'
import ValueButton from '../../components/ValueButton'
import EqualButton from '../../components/EqualButton'
import ResultScreen from '../../components/ResultScreen'
import ClearButton from '../../components/ClearButton'

export default function Calculator(){

    const division = () => {
        console.log("Botão de divisão")
    }
    
    const multiply = () => {
        console.log("Botão de multiplicação")
    }

    const sub = () => {
        console.log("Botão de subtração")
    }

    const sum = () => {
        console.log("Botão de soma")
    }

    return(
        <CalculatorContainer>
            <ResultScreen>
                
            </ResultScreen>

            <ButtonsContainer>
                <Row>
                    <ClearButton type='button' clearType='ce'>
                        CE
                    </ClearButton>

                    <ClearButton type='button' clearType='c'>
                        C
                    </ClearButton>
                </Row>
                <Row>
                    {/* Value buttons */}

                    <Column>
                        <Row>
                            <ValueButton value='7' onClick={(e)=>{console.log('oi')}}/>
                            <ValueButton value='8' onClick={(e)=>{console.log('oi')}}/>
                            <ValueButton value='9' onClick={(e)=>{console.log('oi')}}/>
                        </Row>
                        <Row>
                            <ValueButton value='4' onClick={(e)=>{console.log('oi')}}/>
                            <ValueButton value='5' onClick={(e)=>{console.log('oi')}}/>
                            <ValueButton value='6' onClick={(e)=>{console.log('oi')}}/>
                        </Row>
                        <Row>
                            <ValueButton value='1' onClick={(e)=>{console.log('oi')}}/>
                            <ValueButton value='2' onClick={(e)=>{console.log('oi')}}/>
                            <ValueButton value='3' onClick={(e)=>{console.log('oi')}}/>
                        </Row>

                        <Row>
                            <ValueButton fullWidth value='0' onClick={(e)=>{console.log('oi')}}/>
                            <ValueButton value='.' onClick={(e)=>{console.log('oi')}}/>
                        </Row>
                    </Column>
                    
                    {/* Operator buttons */}
                    <Column>
                        <OperatorButton name={'divisiom'} value={'÷'} onClick={division}/>
                        <OperatorButton name={'multiply'} value={'x'} onClick={multiply}/>
                        <OperatorButton name={'subsubtraction'} value={'-'} onClick={sub}/>
                        <OperatorButton name={'summ'} value={'+'} onClick={sum}/>
                    </Column>
                </Row>


                {/* Equal button */}
                <Row>
                    <EqualButton onClick={()=> console.log("Botão de resultado (=)")}>=</EqualButton>
                </Row>

            </ButtonsContainer>
        </CalculatorContainer>
    )
}