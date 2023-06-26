import { PageBtnProps } from '../../interfaces/MoviesData'
import { Button } from './styles'

export default function PageButton({ children, onClick }: PageBtnProps): JSX.Element{
    return(
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}