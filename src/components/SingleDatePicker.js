import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";

export default function ReactdatesDatepicker(props) {
    const [date, setDate] = useState(props.createdAt);
    const [isFocused, setIsFocused] = useState(false);
  
    function onDateChange(date) {
      if(date){
        props.onDateChange(date)
        setDate(date);
      }
    }
  
    function onFocusChange({ focused }) {
      setIsFocused(focused);
    }
  
    return (
      <SingleDatePicker
        id="date_input"
        date={date}
        focused={isFocused}
        onDateChange={onDateChange}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={(day)=> false}
      />
    );
  }
  