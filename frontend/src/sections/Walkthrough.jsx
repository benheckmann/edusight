import React, { useState, useEffect } from "react";


const Walkthrough = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate a value between 0 and 1 depending on the scroll position.
  const scrollPercent = Math.min(scrollPosition / 1000, 1);

  // Calculate the new color values.
  const red = Math.round(255 * (1 - scrollPercent));
  const green = Math.round(255 * (1 - scrollPercent));
  const blue = Math.round(255 * (1 - scrollPercent));

  // Convert the RGB values to a CSS color string.
  const color = `rgb(${red}, ${green}, ${blue})`;

  return (
    // <div
    //   className="h-[500vh] w-screen"
    //   style={{
    //     backgroundColor: color
    //   }}
    // >
    //   {/* content goes here */}
    // </div>
    <>
    <p>hello</p>
    </>
  );
};

export default Walkthrough;
