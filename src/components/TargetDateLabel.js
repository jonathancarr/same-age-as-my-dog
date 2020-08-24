import React, { useMemo } from 'react';
import { MONTHS } from '../constants';

const TargetDateLabel = ({ targetDate, conclusion }) => {
  return (
    <div className="target-date">
      <p className="target-date__label">
        {conclusion === "future" && (
          "You will be the same age on"
        )}
        {conclusion === "past" && (
          "You were the same age on"
        )}
        {conclusion === "never" && (
          "You were never the same age :("
        )}
      </p>
      <p className={`target-date__date target-date__date--${conclusion === "never" ? "hidden" : "visible"}`}>
        {`${targetDate.getDate()} ${MONTHS[targetDate.getMonth()]} ${targetDate.getFullYear()}`}
      </p>
    </div>
  )
}

export default TargetDateLabel;