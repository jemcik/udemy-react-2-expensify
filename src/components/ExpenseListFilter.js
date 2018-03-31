import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onFilterChange = (e) => {
        switch (e.target.value) {
            case 'date':
                this.props.sortByDate();
                break;
            case 'amount':
                this.props.sortByAmount();
                break;
            default:
                this.props.sortByDate();
                break;
        }
    };

    render() {
        return (
            <div className='content-container'>
                <div className='horizontal-input-group'>
                    <div className='input-group-item'>
                        <input
                            className='text-input'
                            type='text'
                            placeholder='Поиск'
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className='input-group-item'>
                        <select
                            className='select'
                            value={this.props.filters.sortBy}
                            onChange={this.onFilterChange}
                        >
                            <option value='date'>Дата</option>
                            <option value='amount'>Сумма</option>
                        </select>
                    </div>
                    <div className='input-group-item'>
                        <DateRangePicker
                            startDatePlaceholderText='Начало'
                            startDate={this.props.filters.startDate}
                            startDateId={uuid()}
                            endDatePlaceholderText='Конец'
                            endDate={this.props.filters.endDate}
                            endDateId={uuid()}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                            showDefaultInputIcon={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (value) => dispatch(setTextFilter(value)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);
