import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className='header'>
        <div className='content-container'>
            <div className='content'>
                <Link className='title' to='/dashboard'>
                    <h1>Учет расходов</h1>
                </Link>
                <button className='button link' onClick={startLogout}>Выйти</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(Header);
