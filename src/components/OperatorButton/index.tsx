import { Button, OperatorInput } from "./styles";

import { OperatorProps } from "../../interfaces/CalculatorProps";

export default function OperatorButton({name, value, children, onClick}: OperatorProps): JSX.Element{
    return(
        <Button 
            type="button" 
            name={name}
            onClick={onClick}
        > 
            <OperatorInput 
                type='hidden' 
                value={value} 
            />
            {children}
        </Button>
    )
}