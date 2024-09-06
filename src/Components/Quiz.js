import React, { useState } from 'react';
import './Quiz.css';
import Questionlist from './Questionlist';

const questions = [
  { question:  "What is React?", options: ["A library", "A framework", "A database"], answer: "A library" },
  { question: "What is the latest version of React?", options: ["17", "18", "19"], answer: "18" },
  { question: "Which company developed React?", options: ["Google", "Facebook", "Microsoft"], answer: "Facebook" },
  { question: "What is JSX?", options: ["A programming language", "JavaScript syntax extension", "A CSS framework"], answer: "JavaScript syntax extension" },
  { question: "What is a component in React?", options: ["A piece of UI", "A function", "A library"], answer: "A piece of UI" },
  { question: "What hook is used for state management in functional components?", options: ["useEffect", "useState", "useContext"], answer: "useState" },
  { question: "What is props in React?", options: ["Short for properties", "A method", "A state"], answer: "Short for properties" },
  { question: "What is the virtual DOM?", options: ["A real DOM", "A lightweight copy of the actual DOM", "A database"], answer: "A lightweight copy of the actual DOM" },
  { question: "How do you create a React app?", options: ["npm create-react-app", "npm install react", "npm start"], answer: "npm create-react-app" },
  { question: "What is useEffect used for?", options: ["Managing state", "Handling side effects", "Routing"], answer: "Handling side effects" }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitClick = () => {
    const isCorrect = selectedOption === questions[currentQuestionIndex].answer;
    setAnswers([...answers, { selected: selectedOption, correct: isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setQuizFinished(true);
    }
    setSelectedOption(null);
  };

  const handleRestartClick = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setQuizFinished(false);
    setAnswers([]);
  };

  return (
    <div className="quiz-container">
      {quizFinished ? (
        <div className="quiz-results">
          <h2>Quiz Finished</h2>
          <p>Your score: {score} / {questions.length}</p>
          <button className="restart-button" onClick={handleRestartClick}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-question">
          <h3>Question {currentQuestionIndex + 1} of {questions.length}</h3>
          <Questionlist
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
          />
          
          <button
            className="submit-button"
            onClick={handleSubmitClick}
            disabled={!selectedOption}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
