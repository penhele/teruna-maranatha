import { useEffect, useRef, useState } from "react";
import tenar1 from "./../assets/images/tenar1.jpeg";
import tenar2 from "./../assets/images/tenar2.jpeg";
import tenar3 from "./../assets/images/tenar3.jpeg";

function Slider() {
  const imageList = [{ name: tenar1 }, { name: tenar2 }, { name: tenar3 }];
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: currentIndex * containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="flex overflow-hidden scrollbar-hide md:w-3/5 sm:w-3/4 mx-auto"
      style={{ scrollBehavior: "smooth" }}
    >
      {imageList.map((item) => (
        <img
          src={item.name}
          className="object-contain bg-gray-200 rounded-md"
        />
      ))}
    </div>
  );
}

export default Slider;
