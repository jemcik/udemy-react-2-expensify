import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ selectExpenses }) => {
    const expensesWord = `расход${
        selectExpenses.length === 1
            ? ''
            : (selectExpenses.length > 4 || selectExpenses.length === 0
                ? 'ов'
                : 'а')
        }`;
    const totalFormatted = numeral(expensesTotal(selectExpenses) / 100).format('0,0[.]00 $');

    return <div className='page-header'>
        <div className='content-container'>
            <h1 className='title'>
                Показан{selectExpenses.length === 1 ? '' : 'о'}
                <span> {selectExpenses.length}</span> {expensesWord}, общая сумма: <span>{totalFormatted}</span>
            </h1>
            <div className='actions'>
                <Link className='button' to='/create'>Добавить расход</Link>
            </div>
        </div>
    </div>
};

const mapStateToProps = (state) => ({
    selectExpenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
