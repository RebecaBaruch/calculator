import { ReactNode, MouseEventHandler } from 'react';
import { Button, OperatorInput } from "./styles";


interface OperatorProps{
    name?: string;
    value: string;
    children?: ReactNode;
    onClick: React.MouseEventHandler<HTMLElement>;
}

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