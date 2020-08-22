import React from 'react';
import ViewToggle from './ViewToggle';
import TargetDateLabel from './TargetDateLabel';

const Header = ({ isCalculated, targetDate }) => (
  <div className="header">
    <h1 className="title">When will I be the same age as my dog?</h1>
    <ViewToggle visible={isCalculated}>
      <TargetDateLabel targetDate={targetDate} />
    </ViewToggle>
  </div>
)

export default Header;