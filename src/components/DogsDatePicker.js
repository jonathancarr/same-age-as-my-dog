import React from 'react';
import DatePicker from 'react-datepicker';
import ViewToggle from './ViewToggle';

const DogsDatePicker = ({ className, dogsBirthDate, setDogsBirthDate, isCalculated }) => {

  return (
    <div className={`date-field my-date ${className}`}>
      <ViewToggle visible={!isCalculated}>
        <p>My dog was born on</p>
        <DatePicker
          selected={dogsBirthDate}
          onChange={date => setDogsBirthDate(date)}
        />
      </ViewToggle>
    </div>
  );
}

export default DogsDatePicker;