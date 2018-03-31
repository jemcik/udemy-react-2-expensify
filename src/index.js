import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import moment from 'moment';
import 'moment/locale/ru';
import numeral from 'numeral';
import 'numeral/locales/uk-ua';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/index.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';

numeral.locale('uk-ua');
moment.locale('ru');

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

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

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
