import React from 'react';
import ViewToggle from './ViewToggle';
import ConclusionLabel from './ConclusionLabel';

const Footer = ({ isCalculated, goToResults, goToForm, targetDate, isMobile }) => (
  <div className="footer">
    <ViewToggle className="footer__form" visible={!isCalculated}>
      <button
        className={`button button__calculate button--primary`}
        onClick={goToResults}
      >
        Calculate
      </button>
    </ViewToggle>

    <ViewToggle visible={isCalculated}>
      <div className="footer__calculated">
        { !isMobile && (
          <ConclusionLabel targetDate={targetDate}/>
        )}
        <button
          className={`button button__back button--secondary`}
          onClick={goToForm}
        >
          Go back
        </button>
      </div>
    </ViewToggle>
  </div>
)

export default Footer;