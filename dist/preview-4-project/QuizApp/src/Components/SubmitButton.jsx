const SubmitButton = ({ currentQuestion, questionsLength, submitClicked }) => (
  <>
    {currentQuestion === questionsLength - 1 && (
      <button
        className="ms-md-4 d-flex text-light btn btn-success"
        onClick={submitClicked}
      >
        Submit
      </button>
    )}
  </>
);

export default SubmitButton;
