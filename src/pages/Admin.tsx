import supabase from "@/supabase-client";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";

function Admin() {
  const navigate = useNavigate();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("login");
  };

  const [imageKegiatanList, setImageKegiatanList] = useState<Kegiatan[]>([]);
  const [imagePengurusList, setImagePengurusList] = useState<Pengurus[]>([]);

  type Kegiatan = {
    id: number;
    image_url: string;
  };

  type Pengurus = {
    id: number;
    image_url: string;
  };

  useEffect(() => {
    fetchImageKegiatan();
    fetchImagePengurus();
  });

  const fetchImageKegiatan = async () => {
    const { data, error } = await supabase
      .from("KegiatanPersekutuanTeruna")
      .select("*");

    if (error) {
      console.log("Error fetching: ", error);
    } else {
      setImageKegiatanList(data);
    }
  };

  const fetchImagePengurus = async () => {
    const { data, error } = await supabase
      .from("PengurusPersekutuanTeruna")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log("Error fetching: ", error);
    } else {
      setImagePengurusList(data);
    }
  };

  return (
    <div className="p-4 sm:px-8 max-w-7xl  mx-auto">
      <div className="flex justify-between">
        <h1>Admin Dashboard</h1>
        <button onClick={signOut} className="flex gap-3 items-center">
          <CiLogout />
          <p>Sign Out</p>
        </button>
      </div>

      <div className="flex flex-col gap-3 mb-10">
        <h1>Slider</h1>
        <div className="grid grid-cols-4 gap-5">
          {imageKegiatanList.map((item) => (
            <div key={item.id} className="relative aspect-video ">
              <img
                src={item.image_url}
                className="aspect-video object-cover rounded-lg"
              />
              <MdEdit className="absolute top-1/2 right-1/2" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1>Pengurus</h1>
        <div className="grid grid-cols-4 gap-5">
          {imagePengurusList.map((item) => (
            <img
              key={item.id}
              src={item.image_url}
              className="aspect-video object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
