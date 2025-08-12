import supabase from "./../supabase-client.ts";
import { useEffect, useState } from "react";

function PengurusCard() {
  type Pengurus = {
    id: number;
    image_url: string;
  };

  const [imageList, setImageList] = useState<Pengurus[]>([]);

  useEffect(() => {
    fetchPengurus();
  }, []);

  const fetchPengurus = async () => {
    const { data, error } = await supabase
      .from("PengurusPersekutuanTeruna")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.log("Error fetching: ", error);
    } else {
      setImageList(data);
    }
  };

  return (
    <div className="flex flex-col gap-5 p-5 bg-amber-50 shadow-lg backdrop-blur-md rounded-lg text-center items-center">
      <h1 className="titleSection">
        Pengurus Pelkat PT GPIB Maranatha Jakarta Periode 2025-2027
      </h1>

      <div className="flex scrollbar-hide overflow-x-auto snap-x snap-mandatory rounded-lg">
        {imageList.map((item) => (
          <img
            key={item.id}
            src={item.image_url}
            className="w-full md:w-1/2 aspect-video object-cover snap-center"
          />
        ))}
      </div>
    </div>
  );
}

export default PengurusCard;
