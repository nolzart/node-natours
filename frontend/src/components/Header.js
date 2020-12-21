import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
    return (
        <header className='header'>
            <nav className='nav nav--tours'>
                <Link to='/' className='nav__el'>
                    All tours
                </Link>
            </nav>
            <div className='header__logo'>
                <img src='/img/logo-white.png' alt='Natours logo' />
            </div>
            <nav className='nav nav--user'>
                {user ? (
                    <>
                        <Link to='/' className='nav__el nav__el--logout'>
                            Log out
                        </Link>
                        <Link to='/me' className='nav__el'>
                            <img
                                src={`/img/users/${user.photo}`}
                                alt={`${user.name}`}
                                className='nav__user-img'
                            />
                            <span>{user.name.split(' ')[0]}</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to='/login' className='nav__el'>
                            Login
                        </Link>
                        <Link to='/signup' className='nav__el nav__el--cta'>
                            Sign up
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
