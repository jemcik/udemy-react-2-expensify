import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('return 0 if no expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('one expense', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});

test('multiple expense', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});
