import supabase from "@/supabase-client";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { useEffect, useState, type ChangeEvent } from "react";

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

  const uploadImagePengurus = async (
    e: ChangeEvent<HTMLInputElement>,
    pengurusId: number,
  ) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const filePath = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("profile")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error("Upload error:", uploadError.message);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("profile")
      .getPublicUrl(filePath);

    const publicUrl = urlData.publicUrl;

    const { error: updateError } = await supabase
      .from("PengurusPersekutuanTeruna")
      .update({ image_url: publicUrl })
      .eq("id", pengurusId);

    if (updateError) {
      console.error("Update error:", updateError.message);
      return;
    }

    console.log("Image updated successfully!");

    fetchImagePengurus();
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
            <div key={item.id} className="relative aspect-video group">
              <img
                src={item.image_url}
                className="object-cover rounded-lg w-full h-full"
              />
              <div className="absolute inset-0 bg-gray-500/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <MdEdit className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1>Pengurus</h1>
        <div className="relative grid grid-cols-4 gap-5">
          {imagePengurusList.map((item) => (
            <label
              key={item.id}
              className="relative aspect-video group cursor-pointer"
            >
              <img
                src={item.image_url}
                className="object-cover rounded-lg w-full h-full"
              />
              <div className="absolute inset-0 bg-gray-500/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <MdEdit className="text-white" />
              </div>
              <input
                type="file"
                className="hidden"
                onChange={(e) => uploadImagePengurus(e, item.id)}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
