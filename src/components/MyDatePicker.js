import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import ViewToggle from './ViewToggle';
import TargetDateLabel from './TargetDateLabel';
import MomentUtils from '@date-io/moment'

const MyDatePicker = ({ className, myBirthDate, setMyBirthDate, targetDate, conclusion, isCalculated, isMobile, setExpression }) => {

  return (
    <div className={`date-field my-date ${className}`}>
      <ViewToggle visible={!isCalculated}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            disableFuture
            openTo="year"
            format="DD/MM/yyyy"
            label="I was born on"
            views={["year", "month", "date"]}
            value={myBirthDate}
            onChange={setMyBirthDate}
            onMouseEnter={() => setExpression(isMobile ? "looking-up" : "looking-left")}
          />
        </MuiPickersUtilsProvider>
      </ViewToggle>

      {isMobile && (
        <ViewToggle className="my-date__target" visible={isCalculated}>
          <TargetDateLabel targetDate={targetDate} conclusion={conclusion}/>
        </ViewToggle>
      )}
    </div>
  );
}

export default MyDatePicker;