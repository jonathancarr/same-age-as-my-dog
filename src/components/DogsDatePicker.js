import React from 'react';
import DatePicker from 'react-datepicker';
import ViewToggle from './ViewToggle';
import ConclusionLabel from './ConclusionLabel';

const DogsDatePicker = ({ className, dogsBirthDate, setDogsBirthDate, isCalculated, targetDate, isMobile, setExpression }) => {

  return (
    <div className={`date-field my-date ${className}`}>
      <ViewToggle visible={!isCalculated}>
        <p>My dog was born on</p>
        <DatePicker
          selected={dogsBirthDate}
          onChange={date => setDogsBirthDate(date)}
          onFocus={() => setExpression(isMobile ? "looking-down" : "looking-right")}
        />
      </ViewToggle>

      {isMobile && (
        <ViewToggle className="my-date__target" visible={isCalculated}>
          <ConclusionLabel targetDate={targetDate} />
        </ViewToggle>
      )}
    </div>
  );
}

export default DogsDatePicker;