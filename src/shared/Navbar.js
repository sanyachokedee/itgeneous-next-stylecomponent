import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
    background-color: #000;
    height: 80px;
    color: #fff;
    display:flex;
    justify-content: space-between;
    align-items:center;
`

const StyledLink = styled.a`
    font-weight:bold;
    padding: 0 2rem;
    text-transform: uppercase;
`

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href='/' passHref>
                    <StyledLink>Next App</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/' passHref>
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href='/about' passHref>
                    <StyledLink>About</StyledLink>
                </Link>
                <Link href='/contact' passHref>
                    <StyledLink>Contact</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar
