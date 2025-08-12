import supabase from "./../supabase-client.ts";
import { useEffect, useState } from "react";

function PengurusCard() {
  type Pengurus = {
    id: number;
    name: string;
    position: string;
    profile_url: string;
  };

  const [imageList, setImageList] = useState<Pengurus[]>([]);

  useEffect(() => {
    fetchPengurus();
  }, []);

  const fetchPengurus = async () => {
    const { data, error } = await supabase
      .from("PengurusPersekutuanTeruna")
      .select("*");

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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        {imageList.map((item) => (
          <div key={item.id} className="flex flex-col gap-0.5">
            <img src={item.profile_url} className="rounded-lg max-w-3xs" />
            <p className="bg-amber-100">{item.name}</p>
            <p className="font-semibold">{item.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PengurusCard;
