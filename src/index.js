import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/index.css';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(app, document.getElementById('root'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
