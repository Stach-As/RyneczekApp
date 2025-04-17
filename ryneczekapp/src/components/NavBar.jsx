import {Container, Nav, Navbar} from 'react-bootstrap';
import { useState, useEffect } from 'react';

import logo from '../assets/img/logo.svg'
import discordIcon from '../assets/img/discord-icon.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
 
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : "" }>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Glowna</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Umiejetnosci</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projekty</Nav.Link>
                    </Nav>
                    <span className="navbbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={discordIcon} alt="DiscordLogo" /></a>
                            <a href="#"><img src={navIcon2} alt="GitHubLogo" /></a>
                            <a href="#"><img src={navIcon3} alt="FaceBookLogo" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('dzia³a')}><span>Kontakt</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}