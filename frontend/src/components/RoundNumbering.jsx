const RoundNumbering = ({ number }) => {
  return (
    <div
      className="w-10 h-10 flex items-center justify-center text-2xl rounded-full font-sans border-midnight border-2"
    >
      {number}
    </div>
  );
};

export default RoundNumbering;