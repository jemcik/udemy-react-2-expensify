import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/lib/css/_datepicker.css';

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
		}
	};

	render() {
		return (
			<div>
				<input
					type='text'
					value={this.props.filters.text}
					onChange={this.onTextChange}
				/>
				<select
					value={this.props.filters.sortBy}
					onChange={this.onFilterChange}
				>
					<option value='date'>Date</option>
					<option value='amount'>Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					startDateId={uuid()}
					endDate={this.props.filters.endDate}
					endDateId={uuid()}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
					showClearDates={true}
				/>
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
