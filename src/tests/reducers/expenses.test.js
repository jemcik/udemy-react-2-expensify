import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('default setup', () => {
    const state = expensesReducer(undefined, { type: '' });

    expect(state).toEqual([]);
});


test('remove by id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: '2'
    });

    expect(state).toEqual([expenses[0], expenses[2]]);
});


test('add expense', () => {
    const newExpense = { id: '4' };
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense: newExpense
    });

    expect(state.find(({ id }) => id === newExpense.id)).toEqual(newExpense);
});

test('edit expense', () => {
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description: 'updated',
            note: 'test',
            amount: 222,
            createdAt: 123
        }
    });

    expect(state.find(({ id }) => id === '1')).toEqual({
        id: '1',
        description: 'updated',
        note: 'test',
        amount: 222,
        createdAt: 123
    });
});

