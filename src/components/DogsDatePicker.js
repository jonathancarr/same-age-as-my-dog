import React from 'react';
import ViewToggle from './ViewToggle';
import ConclusionLabel from './ConclusionLabel';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment'

const DogsDatePicker = ({ className, dogsBirthDate, setDogsBirthDate, isCalculated, targetDate, isMobile, setExpression }) => {

  return (
    <div className={`date-field my-date ${className}`}>
      <ViewToggle visible={!isCalculated}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            disableFuture
            openTo="year"
            format="DD/MM/yyyy"
            label="My dog was born on"
            views={["year", "month", "date"]}
            value={dogsBirthDate}
            onChange={setDogsBirthDate}
            onFocus={() => setExpression(isMobile ? "looking-down" : "looking-right")}
          />
        </MuiPickersUtilsProvider>
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