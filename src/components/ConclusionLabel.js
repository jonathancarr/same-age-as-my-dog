import React, { useMemo } from 'react';
import { MONTHS } from '../constants';

const ConclusionLabel = ({ targetDate }) => {
  const inFuture = useMemo(() => targetDate.getTime() > new Date().getTime(), [targetDate])

  return (
    <div className="conclusion">
      <p className="conclusion__label">
        {inFuture ? (
          "You should throw a party!"
          ):(
          "Your dog is older than you"
        )}
      </p>
      <p className={`conclusion__subtitle conclusion__subtitle--${inFuture ? 'hidden' : 'visible'}`}>
        Treat them with respect
      </p>
    </div>
  )
}

export default ConclusionLabel;