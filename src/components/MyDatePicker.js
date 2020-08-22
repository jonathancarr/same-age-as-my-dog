import React from 'react';
import DatePicker from 'react-datepicker';
import ViewToggle from './ViewToggle';

const MyDatePicker = ({ className, myBirthDate, setMyBirthDate, isCalculated }) => {

  return (
    <div className={`date-field my-date ${className}`}>
      <ViewToggle visible={!isCalculated}>
        <p>I was born on</p>
        <DatePicker
          selected={myBirthDate}
          onChange={date => setMyBirthDate(date)}
        />
      </ViewToggle>
    </div>
  );
}

export default MyDatePicker;