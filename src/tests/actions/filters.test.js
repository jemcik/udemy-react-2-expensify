import moment from 'moment';
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from '../../actions/filters';


test('set text filter', () => {
	const action = setTextFilter('test');

	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'test'
	});
});

test('sort by date', () => {
	const action = sortByDate();

	expect(action).toEqual({
		type: 'SORT_BY_DATE'
	});
});

test('sort by amount', () => {
	const action = sortByAmount();

	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});

test('set start date', () => {
	const action = setStartDate(moment(0));

	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('set end date', () => {
	const action = setEndDate(moment(0));

	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});
