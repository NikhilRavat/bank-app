import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Images from '../../Images';
import './Layout.css';

function Header() {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.user);
    const { userName } = userState.data;
    const images = Images;

    const LogOutHandler = () => {
        localStorage.clear();
        navigate('/sign-in');
    }
    useEffect(() => {
        if (!userState.data) {
            navigate('/sign-in');
        }
    });

    return (
        <header className="p-2 bg-primary text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink to={"/"} className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img className="app-logo" style={{ height: '50px', position: 'relative', bottom: '2px', marginRight: '5px' }} src={images.Bank_LOGO} />
                    </NavLink>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <NavLink to={'/'} className="nav-link px-2 text-white">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/banks'} className="nav-link px-2 text-white">Bank</NavLink>
                        </li>
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>
                    {userName === undefined ? (
                        <div className="text-end">
                            <button
                                type="button"
                                className="btn btn-outline-light me-2"
                                onClick={() => navigate("sign-in")}
                            >
                                Login
                            </button>
                            <button type="button" className="btn btn-warning">
                                Sign-up
                            </button>
                        </div>
                    ) : (
                        <div className="text-end">
                            <span className="me-2">{userName}</span>
                            <button type="button" className="btn btn-danger" onClick={LogOutHandler}>
                                Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header