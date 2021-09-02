import React, { useState, useEffect } from 'react';
import './Nav.css';
import netflixImage from '../../Images/netflix.png'
import { useHistory } from 'react-router-dom';

function Nav() {

    const [show, setShow] = useState(false)

    const history = useHistory();

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        /* return () => window.removeEventListener('scroll', transitionNavbar); */
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`} >
            <div className='nav__contents'>
                <img onClick={() => history.push('/')} 
                className='nav__logo' 
                src={`${netflixImage}`} />

                <img onClick={() => history.push('/profile')} 
                className='nav__avatar' 
                src='https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png'/>
            </div>
        </div>
    )
}

export default Nav;