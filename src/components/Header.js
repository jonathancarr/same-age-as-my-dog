import React from 'react';
import ViewToggle from './ViewToggle';
import TargetDateLabel from './TargetDateLabel';

const Header = ({ isCalculated, targetDate, conclusion, isMobile }) => {

  return (
    <div className="header">
      <h1 className="title">When will I be the same age as my dog?</h1>
      { !isMobile && (
        <ViewToggle visible={isCalculated}>
          <TargetDateLabel targetDate={targetDate} conclusion={conclusion} />
        </ViewToggle>
      )}
    </div>
  );
}

export default Header;