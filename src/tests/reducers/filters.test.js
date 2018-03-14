import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('default setup', () => {
    const state = filtersReducer(undefined, { type: '' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});


test('sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

    expect(state.sortBy).toBe('amount');
});

test('sort by date', () => {
    const state = filtersReducer({
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }, { type: 'SORT_BY_DATE' });

    expect(state.sortBy).toBe('date');
});


test('set text filter', () => {
    const text = 'test';
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });

    expect(state.text).toBe(text);
});

test('set startDate filter', () => {
    const startDate = moment(0);
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });

    expect(state.startDate).toEqual(startDate);
});

test('set endDate filter', () => {
    const endDate = moment(0);
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });

    expect(state.endDate).toEqual(endDate);
});