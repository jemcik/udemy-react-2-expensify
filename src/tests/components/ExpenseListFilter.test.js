import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();

	wrapper = shallow(
		<ExpenseListFilter
			filters={filters}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
		/>
	);
});

test('render ExpenseListFilter', () => {
	expect(wrapper).toMatchSnapshot();
});

test('render ExpenseListFilter with alt filters', () => {
	wrapper.setProps({ filters: altFilters });

	expect(wrapper).toMatchSnapshot();
});

test('text change', () => {
	const value = 'test';
	wrapper.find('input').simulate('change', { target: { value } });

	expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('sort by date', () => {
	const value = 'date';
	wrapper.find('select').simulate('change', { target: { value } });

	expect(sortByDate).toHaveBeenCalled();
});

test('sort by amount', () => {
	const value = 'amount';
	wrapper.find('select').simulate('change', { target: { value } });

	expect(sortByAmount).toHaveBeenCalled();
});

test('set dates', () => {
	const startDate = moment(0).add(4, 'years');
	const endDate = moment(0).add(8, 'years');
	wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });

	expect(setStartDate).toHaveBeenLastCalledWith(startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('focus change', () => {
	const calendarFocused = 'endDate';
	wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);

	expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
