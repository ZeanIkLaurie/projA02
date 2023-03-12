import { Container, Nav, Navbar as NavBS} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Navbar() {
    return (
        <NavBS bg='dark' variant='dark' expand='md'>
            <Container>
                <img src='../src/assets/torta-image.png' width='80' height='50'></img>
                <Nav className='justify-content-end'>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/checkout' as={NavLink}>Checkout</Nav.Link>
                </Nav>
                G
            </Container>
        </NavBS>
    )
}