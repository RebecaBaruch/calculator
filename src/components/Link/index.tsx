import { MyLinkProps } from "../../interfaces/CalculatorProps";
import { StyledLink } from './styles';

export default function Link({children, href}: MyLinkProps):  JSX.Element{
    return(
        <StyledLink href={href}>
            {children}
        </StyledLink>
    )
}