import Image from 'next/image';
import { BackspaceProps } from "../../../interfaces/CalculatorProps";
import { Button } from "./styles";
import BackspaceIcon from '../../../../public/images/noun-backspace-2395899.svg';

export default function BackspaceButton({ onClick }: BackspaceProps): JSX.Element{
    return(
        <Button onClick={onClick}>
            <Image 
                src={BackspaceIcon} 
                alt="Backspace icon" 
                width={0}
                height={0}
            />
        </Button>
    )
}