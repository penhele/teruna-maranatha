import logoPelkatPt from "./../assets/images/logo-pelkat-pt.png";
import NavigationBar from "../components/NavigationBar";
import Slider from "../components/Slider";
import JadwalIbadah from "../components/JadwalIbadah";
import PengurusCard from "../components/PengurusCard";
import bannerBibleCamp from "./../../src/assets/images/banner-bible-camp.png";
import { FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="p-4 sm:px-8 max-w-7xl  mx-auto">
      <NavigationBar />

      <Slider />

      <section className="flex flex-col gap-5 ">
        <JadwalIbadah />

        <div className="flex flex-col gap-5 p-5 bg-white shadow-lg backdrop-blur-md rounded-lg">
          <h1 className="titleSection text-center">
            Kegiatan Terdekat
          </h1>
          <img src={bannerBibleCamp} className="rounded-lg" />
          <a
            href="https://bit.ly/PendaftaranBibleCampMaranatha"
            target="_blank"
            className=""
          >
            Klik untuk mendaftar 🔗
          </a>
        </div>

        <div className="flex gap-5 p-5 bg-white shadow-lg backdrop-blur-md rounded-lg">
          <div>
            <h1 className="titleSection">Apa itu Pelkat PT?</h1>
            <p>
              Pelayanan Kategorial Persekutuan Teruna (Pelkat PT) adalah bagian
              dari unit misioner GPIB dengan tugas utamanya untuk membina dan
              melayani warga GPIB dalam kategori usia 13-17 tahun.
            </p>
          </div>
          <img
            src={logoPelkatPt}
            className="max-h-[100PX] sm:max-h-[150PX] w-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5 p-5 bg-[#f4f4fc] shadow-lg backdrop-blur-md rounded-lg">
          <img
            src="https://dgihpukgzlneaftwvwsx.supabase.co/storage/v1/object/public/kegiatan-teruna/kegiatan-1.jpeg"
            className="md:w-1/2 h-auto rounded-lg aspect-video object-contain bg-gray-200"
          />
          <div>
            <h1 className="titleSection">
              Persekutuan Teruna ​GPIB Maranatha Jakarta
            </h1>
            <p>
              Merupakan bagian kecil dari Persekutuan Teruna GPIB yang ada di
              dalam GPIB Jemaat “Maranatha” Jakarta. Persekutuan ini menjadi
              wadah persekutuan bagi remaja atau teruna dalam jemaat, tempat di
              mana mereka dapat bertumbuh bersama dalam iman, mengembangkan
              potensi yang dimiliki, serta belajar melayani Tuhan dan sesama.
            </p>
          </div>
        </div>

        <PengurusCard />
      </section>

      <div className="my-6 h-px bg-gray-300" />

      <section>
        <div className="flex justify-between items-center mb-5">
          <p className="text-gray-600">
            © 2025 Persekutuan Teruna GPIB Maranatha Jakarta. All Rights
            Reserved.
          </p>
          <a href="https://www.instagram.com/ptmaranathajkt" target="_blank">
            <FaInstagram className="text-gray-600" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
