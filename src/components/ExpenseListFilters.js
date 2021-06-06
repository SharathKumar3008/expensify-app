import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import DateRangePicker from './DateRangePicker';

class ExpenseListFilters extends React.Component {

    onDateChange = (startDate, endDate) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange = {(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e)=> {
                        if(e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount());
                        }else if(e.target.value === 'date'){
                            this.props.dispatch(sortByDate());
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDateChange={this.onDateChange}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters : state.filters
})

export default connect(mapStateToProps)(ExpenseListFilters);