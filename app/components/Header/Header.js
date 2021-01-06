import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

//Actions
import { logoutUser } from '../../store/actions/authActions';

const Header = () => {
    const { user, isAuthenticated } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    return (
        <header className='header'>
            <nav className='nav nav--tours'>
                <Link href='/'>
                    <a className='nav__el'>All tours</a>
                </Link>
            </nav>
            <div className='header__logo'>
                <img src='/img/logo-white.png' alt='Natours logo' />
            </div>
            <nav className='nav nav--user'>
                {isAuthenticated ? (
                    <>
                        <button
                            type='button'
                            className='nav__el nav__el--logout'
                            onClick={() => dispatch(logoutUser())}
                        >
                            Log out
                        </button>
                        <Link href='/me'>
                            <a className='nav__el'>
                                <img
                                    src={`https://mern-natours.herokuapp.com/img/users/${user.photo}`}
                                    alt={`${user.name}`}
                                    className='nav__user-img'
                                />
                                <span>{user.name.split(' ')[0]}</span>
                            </a>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href='/login'>
                            <a className='nav__el'>Login</a>
                        </Link>
                        <Link href='/signup'>
                            <a className='nav__el nav__el--cta'>Sign up</a>
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
