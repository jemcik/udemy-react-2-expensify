import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className='box-layout'>
        <div className='box'>
            <h1 className='title'>Расходы</h1>
            <p>Возьми свои расходы под контроль</p>
            <button className='button' onClick={startLogin}>Войти с помощью Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
