import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-for-mobile'>Расходы</div>
            <div className='show-for-desktop'>Расходы</div>
            <div className='show-for-desktop'>Сумма</div>
        </div>
        <div className='list-body'>
            {props.expenses.length === 0 ? (
                <div className='list-item message'>
                    <span>Нет расходов</span>
                </div>
            ) : (
                props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
            )}
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
