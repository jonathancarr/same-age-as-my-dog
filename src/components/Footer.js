import React from 'react';
import ViewToggle from './ViewToggle';
import ConclusionLabel from './ConclusionLabel';

const Footer = ({ isCalculated, setIsCalculated, targetDate }) => (
  <div className="footer">
    <ViewToggle className="footer__form" visible={!isCalculated}>
      <button
        className={`button button__calculate button--primary`}
        onClick={() => setIsCalculated(true)}
      >
        Calculate
      </button>
    </ViewToggle>

    <ViewToggle visible={isCalculated}>
      <div className="footer__calculated">
        <ConclusionLabel targetDate={targetDate}/>
        <button
          className={`button button__back button--secondary`}
          onClick={() => setIsCalculated(false)}
        >
          Go back
        </button>
      </div>
    </ViewToggle>
  </div>
)

export default Footer;