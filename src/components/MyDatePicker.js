import React from 'react';
import DatePicker from 'react-datepicker';
import ViewToggle from './ViewToggle';
import TargetDateLabel from './TargetDateLabel';

const MyDatePicker = ({ className, myBirthDate, setMyBirthDate, targetDate, isCalculated, isMobile }) => {

  return (
    <div className={`date-field my-date ${className}`}>
      <ViewToggle visible={!isCalculated}>
        <p>I was born on</p>
        <DatePicker
          selected={myBirthDate}
          onChange={date => setMyBirthDate(date)}
        />
      </ViewToggle>

      {isMobile && (
        <ViewToggle className="my-date__target" visible={isCalculated}>
          <TargetDateLabel targetDate={targetDate} />
        </ViewToggle>
      )}
    </div>
  );
}

export default MyDatePicker;