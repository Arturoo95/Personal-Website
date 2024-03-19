import ReviewAnswer from "./ReviewAnswer";
import QuizSection from "./QuizSection";

const MainPage = ({
  currentQuestion,
  questions,
  optionClicked,
  setCurrentQuestion,
  submitClicked,
  selectedOptions,
}) => (
  <div className="row p-3">
    <ReviewAnswer selectedOptions={selectedOptions} />
    <QuizSection
      currentQuestion={currentQuestion}
      questions={questions}
      optionClicked={optionClicked}
      setCurrentQuestion={setCurrentQuestion}
      submitClicked={submitClicked}
    />
  </div>
);

export default MainPage;
