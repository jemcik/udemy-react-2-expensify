import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/index.css';
import 'react-dates/lib/css/_datepicker.css';

import moment from 'moment';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 1100, createdAt: moment().add(3, 'days').valueOf() }));
store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 7300,
    createdAt: moment().subtract(4, 'days').valueOf()
}));
store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: moment().valueOf() }));


const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
