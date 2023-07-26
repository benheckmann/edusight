const SquareButton = ({ text = "", link = "", isDark = false, color = null }) => {
  const baseClasses = "text-[0.85rem] tracking-wide font-semibold px-4 py-3 mx-2 my-1 rounded-md border-2 duration-300"
  const lightClasses = "border-midnight text-midnight bg-transparent hover:bg-midnight hover:text-white"
  const darkClasses = "border-midnight text-white bg-midnight hover:bg-transparent hover:text-midnight"

  // workaround for tailwind not supporting string interpolation
  const colorClassesMapping = {
    purple: "text-midnight border-[#b696fa] bg-[#b696fa] hover:border-midnight",
    yellow: "text-midnight border-yellow bg-yellow hover:border-midnight"
  }

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button
      className={`${baseClasses} ${color ? colorClassesMapping[color] : isDark ? darkClasses : lightClasses}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default SquareButton;