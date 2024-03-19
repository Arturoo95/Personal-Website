import NavigationButtons from "./NavigationButtons";
import Question from "./Question";
import SubmitButton from "./SubmitButton";

const QuizSection = ({
  currentQuestion,
  questions,
  optionClicked,
  setCurrentQuestion,
  submitClicked,
}) => (
  <div className="col-md-6 question-card p-3">
    <NavigationButtons
      currentQuestion={currentQuestion}
      questionsLength={questions.length}
      setCurrentQuestion={setCurrentQuestion}
    />
    <Question
      currentQuestion={currentQuestion}
      question={questions[currentQuestion]}
      optionClicked={optionClicked}
    />
    <SubmitButton
      currentQuestion={currentQuestion}
      questionsLength={questions.length}
      submitClicked={submitClicked}
    />
  </div>
);

export default QuizSection;
