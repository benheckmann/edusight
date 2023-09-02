const SquareButton = ({
  text = "",
  link = process.env.PUBLIC_URL + "/kontakt",
  isDark = false,
  color = null,
  margin = "mx-2 my-1",
  onClick = null, // for complex behaviour; will override link attribute
}) => {
  const baseClasses =
    "text-[0.85rem] tracking-wide font-normal px-4 py-3 rounded-md border-2 duration-300 " +
    margin;
  const lightClasses =
    "border-midnight text-midnight bg-transparent hover:bg-midnight hover:text-white";
  const darkClasses =
    "border-midnight text-white bg-midnight hover:bg-transparent hover:text-midnight";

  // workaround for tailwind not supporting string interpolation
  const colorClassesMapping = {
    purple: "text-midnight border-[#b696fa] bg-[#b696fa] hover:border-midnight",
    yellow: "text-midnight border-yellow bg-yellow hover:border-midnight",
  };

  const handleClickForLink = () => {
    window.location.href = link;
  };

  return (
    <button
      className={`${baseClasses} ${
        color ? colorClassesMapping[color] : isDark ? darkClasses : lightClasses
      }`}
      onClick={onClick ? onClick : handleClickForLink}
    >
      {text}
    </button>
  );
};

export default SquareButton;
