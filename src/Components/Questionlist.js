import React from 'react';

const Questionlist = ({ question, options, selectedOption, handleOptionClick }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      </ul>
    </div>
  );
};

export default Questionlist;
