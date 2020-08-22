import React, { useMemo } from 'react';
import { MONTHS } from '../constants';

const TargetDateLabel = ({ targetDate }) => {
  const inFuture = useMemo(() => targetDate.getTime() > new Date().getTime(), [targetDate])

  return (
    <div className="target-date">
      <p className="target-date__label">
        {inFuture ? (
          "You will be the same age on"
        ):(
          "You were the same age on"
        )}
      </p>
      <p className="target-date__date">
        {`${targetDate.getDate()} ${MONTHS[targetDate.getMonth()]} ${targetDate.getFullYear()}`}
      </p>
    </div>
  )
}

export default TargetDateLabel;