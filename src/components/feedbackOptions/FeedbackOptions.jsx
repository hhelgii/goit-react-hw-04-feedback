import React from 'react';
import propTypes from 'prop-types';
import css from './feedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleButtonClick = option => {
    onLeaveFeedback(option);
  };

  return (
    <div className={css.buttonList}>
      {options.map(option => (
        <button
          type="button"
          key={option}
          name={option}
          onClick={() => handleButtonClick(option)}
          className={css.rateButton}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
