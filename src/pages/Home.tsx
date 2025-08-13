import logoPelkatPt from "./../assets/images/logo-pelkat-pt.png";
import NavigationBar from "../components/NavigationBar";
import Slider from "../components/Slider";
import JadwalIbadah from "../components/JadwalIbadah";
import PengurusCard from "../components/PengurusCard";

function Home() {
  return (
    <div className="p-4 sm:px-8 max-w-7xl  mx-auto">
      <NavigationBar />

      <Slider />

      <section className="flex flex-col gap-5">
        <JadwalIbadah />

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

        <div className="flex flex-col md:flex-row gap-5 p-5 bg-white shadow-lg backdrop-blur-md rounded-lg">
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
              dalam GPIB Jemaat “Maranatha” Jakarta.
            </p>
          </div>
        </div>

        <PengurusCard />
      </section>
    </div>
  );
}

export default Home;
