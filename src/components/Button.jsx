/* eslint-disable react/prop-types */
const Button = ({ setAmount, amount, title }) => {
  return (
    <button onClick={() => setAmount(amount + 1)}>
      {title} {amount}
    </button>
  );
};

export default Button;
