import { Button } from "./styles";

interface ValueProps{
    fullWidth?: boolean;
    value: string;
    onClick: React.MouseEventHandler<HTMLElement>;
}

export default function ValueButton({fullWidth, value, onClick}: ValueProps){
    return(
        <Button fullWidth={fullWidth} value={value} onClick={onClick}/>
    )
}