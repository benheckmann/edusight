const BorderLessButton = ({
  text = "",
  link = process.env.PUBLIC_URL + "/kontakt",
}) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <button
      className="px-3 py-2 mx-3 text-sm font-semibold hover:bg-background-blue hover:rounded-lg duration-300"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default BorderLessButton;
