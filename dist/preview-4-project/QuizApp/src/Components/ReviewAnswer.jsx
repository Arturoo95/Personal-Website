const ReviewAnswer = ({ selectedOptions }) => (
  <div className="col-sm-6 review-card p-3 ">
    <img
      src="https://cdn-icons-png.flaticon.com/512/9792/9792969.png"
      width="80px"
      height="80px"
      alt="review"
    />
    <h2 className="p-4">Review Answer</h2>
    <div className="card text-dark p-3">
      {selectedOptions.map((option) => (
        <h3 key={option.id}>{option.text}</h3>
      ))}
    </div>
  </div>
);

export default ReviewAnswer;
