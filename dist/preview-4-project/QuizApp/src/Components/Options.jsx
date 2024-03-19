const Options = ({ options, optionClicked }) => (
  <div className="justify-content-md-end">
    {options.map((option) => (
      <li onClick={() => optionClicked(option)} key={option.id}>
        {option.text}
      </li>
    ))}
  </div>
);

export default Options;
