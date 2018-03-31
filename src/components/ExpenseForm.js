import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { Link } from 'react-router-dom';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? String(props.expense.amount / 100) : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: undefined
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.description && this.state.amount) {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        } else {
            this.setState(() => ({ error: 'Пожалуйста, добавьте описание и сумму.' }));
        }
    };

    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                {this.state.error && <p className='form-error'>{this.state.error}</p>}
                <input
                    className={`text-input${this.state.error && !this.state.description ? ' error' : ''}`}
                    type='text'
                    placeholder='описание'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    className={`text-input${this.state.error && !this.state.amount ? ' error' : ''}`}
                    type='number'
                    placeholder='сумма'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    className='textarea'
                    placeholder='комментарий (не обязательно)'
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className='button'>Сохранить</button>
                    <Link className='button grey' to='/dashboard'>Отмена</Link>
                </div>
            </form>
        );
    }
}
