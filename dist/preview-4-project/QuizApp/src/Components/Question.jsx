import Options from "./Options";
import questions from "../Data";

const Question = ({ currentQuestion, question, optionClicked }) => (
  <>
    <h3>
      {" "}
      Question: {currentQuestion + 1} out of {questions.length}{" "}
    </h3>
    <h4 className="question-text p-3">
      Q. {currentQuestion + 1}. {question.text}
    </h4>
    <ul>
      <Options options={question.options} optionClicked={optionClicked} />
    </ul>
  </>
);

export default Question;
