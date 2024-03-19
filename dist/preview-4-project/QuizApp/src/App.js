import React, { useState } from "react";
import "./App.css";
import questions from "./Data";
import Header from "./Components/Header";
import FinalResults from "./Components/FinalResults";
import MainPage from "./Components/MainPage.jsx";

function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const optionClicked = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);

    if (option.isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const submitClicked = () => {
    setFinalResults(true);
  };

  //restartQuiz
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
    setSelectedOptions([]);
  };

  return (
    <div className="App">
      <Header />
      {showFinalResults ? (
        <FinalResults
          score={score}
          totalQuestions={questions.length}
          restartGame={restartGame}
        />
      ) : (
        <MainPage
          currentQuestion={currentQuestion}
          questions={questions}
          optionClicked={optionClicked}
          setCurrentQuestion={setCurrentQuestion}
          submitClicked={submitClicked}
          selectedOptions={selectedOptions}
        />
      )}
    </div>
  );
}

export default App;
