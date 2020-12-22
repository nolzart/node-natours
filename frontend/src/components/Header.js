import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Actions
import { logoutUser } from '../store/actions/authActions';

const Header = () => {
    const { user, isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
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
                {isAuthenticated ? (
                    <>
                        <button
                            type='button'
                            className='nav__el nav__el--logout'
                            onClick={() => dispatch(logoutUser())}
                        >
                            Log out
                        </button>
                        <Link to='/me' className='nav__el'>
                            <img
                                src={`https://mern-natours.herokuapp.com/img/users/${user.photo}`}
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
