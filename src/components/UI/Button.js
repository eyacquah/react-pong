const Button = ({ text, onClick }) => {
  return (
    <button
      style={{ fontSize: "16px", margin: "20px", padding: "10px 24px" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
