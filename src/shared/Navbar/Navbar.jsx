import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <>
      <header class='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
        <a class='navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6' href='#'>
          Eciglogistica
        </a>
        <div class='navbar-nav'>
          <div class='nav-item text-nowrap'>
            <a class='nav-link px-3' href='#' onClick={logOut}>
              Logout
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
