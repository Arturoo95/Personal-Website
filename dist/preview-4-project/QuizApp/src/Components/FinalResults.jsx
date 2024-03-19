const FinalResults = ({ score, totalQuestions, restartGame }) => (
  <div className="final-results">
    <img
      src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
      width="80px"
      height="80px"
      alt="checkmark"
    />
    <h2> You have successfully submitted the assignment </h2>
    <p>
      <b>Questions asked:</b> {totalQuestions}
    </p>
    <p>
      <b>Questions correct:</b> {score}
    </p>
    <p>
      <b>Your Score: </b>
      {(score / totalQuestions).toFixed(2) * 100} %
    </p>
    <button onClick={restartGame}> Restart Quiz </button>
  </div>
);

export default FinalResults;
