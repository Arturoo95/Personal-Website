const NavigationButtons = ({
  currentQuestion,
  questionsLength,
  setCurrentQuestion,
}) => (
  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <div className="button-section text-right mb-3">
      {currentQuestion > 0 && (
        <button
          className="text-light btn btn-info  me-md-4"
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          Prev
        </button>
      )}
      {currentQuestion < questionsLength - 1 && (
        <button
          className="text-light btn btn-info"
          onClick={() => setCurrentQuestion(currentQuestion + 1)}
        >
          Next
        </button>
      )}
    </div>
  </div>
);

export default NavigationButtons;
