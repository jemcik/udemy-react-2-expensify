import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ selectExpenses }) => (
    <div>
        Viewing {selectExpenses.length} expense{selectExpenses.length > 1 ? 's' : ''} totalling {numeral(expensesTotal(selectExpenses) / 100).format('$0,0.00')}
    </div>
);

const mapStateToProps = (state) => ({
    selectExpenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
