import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';
import ExpenseListFilter from './ExpenseListFilter';

const ExpensifyDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpensesSummary />
        <ExpenseList />
    </div>
);

export default ExpensifyDashboardPage;
