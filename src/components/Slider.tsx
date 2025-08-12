import { useEffect, useRef, useState } from "react";
import supabase from "../supabase-client";

function Slider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageList, setImageList] = useState<Kegiatan[]>([]);

  type Kegiatan = {
    id: number;
    image_url: string;
  };

  useEffect(() => {
    fetchImageKegiatan();
  }, []);

  const fetchImageKegiatan = async () => {
    const { data, error } = await supabase
      .from("KegiatanPersekutuanTeruna")
      .select("*");

    if (error) {
      console.log("Error fetching: ", error);
    } else {
      setImageList(data);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1,
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
      className="flex overflow-hidden scrollbar-hide md:w-3/5 sm:w-3/4 mx-auto mb-4"
      style={{ scrollBehavior: "smooth" }}
    >
      {imageList.map((item, index) => (
        <img
          key={index}
          src={item.image_url}
          className="object-contain bg-gray-200 rounded-md aspect-video"
        />
      ))}
    </div>
  );
}

export default Slider;
