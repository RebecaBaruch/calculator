import { Button } from "./styles";


interface OperatorProps{
    name?: string;
    value: string;
    onClick: React.MouseEventHandler<HTMLElement>;
}

export default function OperatorButton({name, value, onClick}: OperatorProps): JSX.Element{
    return(
        <Button type="button" name={name} value={value} onClick={onClick} />
    )
}