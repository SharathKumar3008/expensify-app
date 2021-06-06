import React from "react";
import { DateRangePicker } from "react-dates";

export default class DatePicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startDate : this.props.startDate,
            endDate : this.props.endDate,
            focusedInput : null
        }
    }
    onDateChange = ({ startDate, endDate }) => {
        //if(startDate && endDate) {
            this.props.onDateChange(startDate, endDate);
            return this.setState({ startDate, endDate });
        //}
    }
    render() {
        return (
            <div>
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="start_date_id"
              endDate={this.state.endDate}
              endDateId="end_date_id"
              focusedInput={this.state.focusedInput}
              onDatesChange={this.onDateChange}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              numberOfMonths={1}
              isOutsideRange={()=> false}
              showClearDates={true}
            />
            </div>
          );
    }
}