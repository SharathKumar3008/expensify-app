import React from 'react';
import moment from 'moment';
import SingleDatePicker from './SingleDatePicker';

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description : props.expense ? props.expense.description : '',
            note : props.expense ? props.expense.note : '',
            amount : props.expense ? (props.expense.amount/100).toString() : '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused : false,
            error : ''
    
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({ description }));
    };

    onNotesChange = (e) => {
        const note = e.target.value;
        this.setState(()=>({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        this.setState(()=>({ createdAt }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error: 'Please provide Description and Amount.'}));
        }else{
            this.setState(()=>({error: ''}));
            this.props.onSubmit({
                description : this.state.description,
                amount : parseFloat(this.state.amount, 10) * 100,
                createdAt : this.state.createdAt.valueOf(),
                note : this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error !== '' && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        placeholder="description"
                        autoFocus
                    />
                    <input
                        type="text"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        placeholder="amount"
                    />
                    <SingleDatePicker
                        onDateChange = {this.onDateChange}
                        createdAt={this.state.createdAt || moment()}
                    />
                    <textarea
                        placeholder="Add a Note for your Expense(Optional)"
                        value={this.state.note}
                        onChange={this.onNotesChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}