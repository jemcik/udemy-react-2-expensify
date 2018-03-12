import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('remove expense', () => {
	const action = removeExpense({ id: '123abc' });

	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('edit expense', () => {
	const action = editExpense('123zzz', { a: 'a', b: 1, c: false });

	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123zzz',
		updates: { a: 'a', b: 1, c: false }
	});
});

test('add expense', () => {
	const action = addExpense();

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	});
});
