import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary} from '../../components/ExpensesSummary';

test('render ExpensesSummary for 3 expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary
            selectExpenses={expenses}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

test('render ExpensesSummary for 1 expense', () => {
    const wrapper = shallow(
        <ExpensesSummary
            selectExpenses={[expenses[0]]}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
