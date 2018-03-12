import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('expense form', () => {
	const wrapper = shallow(<ExpenseForm />);

	expect(wrapper).toMatchSnapshot();
});

test('expense form with data', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

	expect(wrapper).toMatchSnapshot();
});

test('error for invalid submission', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();

	wrapper.find('form').simulate('submit', {
		preventDefault: () => {
		}
	});

	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('set description', () => {
	const value = 'test description';
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('input').at(0).simulate('change', { target: { value } });
	expect(wrapper.state('description')).toBe(value);
});

test('set note', () => {
	const value = 'test note';
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('textarea').simulate('change', { target: { value } });
	expect(wrapper.state('note')).toBe(value);
});

test('set amount', () => {
	const value = '22.21';
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('input').at(1).simulate('change', { target: { value } });
	expect(wrapper.state('amount')).toBe(value);
});

test('should not set invalid amount', () => {
	const value = '22.211';
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('input').at(1).simulate('change', { target: { value } });
	expect(wrapper.state('amount')).toBe('');
});

test('submission argument', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

	wrapper.find('form').simulate('submit', {
		preventDefault: () => {
		}
	});

	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		note: expenses[0].note,
		amount: expenses[0].amount,
		createdAt: expenses[0].createdAt
	});
});

test('set date', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
});

test('set focus', () => {
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
	expect(wrapper.state('calendarFocused')).toEqual(focused);
});