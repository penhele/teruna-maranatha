import { MdDateRange, MdOutlinePlace } from "react-icons/md";
import { LuClock9 } from "react-icons/lu";

function JadwalIbadah() {
  const menu = [
    {
      Icon: MdDateRange,
      title: "Setiap Hari Minggu",
    },
    {
      Icon: LuClock9,
      title: "09.00 WIB",
    },
    {
      Icon: MdOutlinePlace,
      title: "Ruang Serbaguna Maranatha",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row p-5 bg-gray-200 shadow-lg backdrop-blur-md rounded-lg gap-7">
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="font-semibold text-2xl mb-3">Jadwal Ibadah</h1>

        <div className="flex flex-col gap-2">
          {menu.map((item, index) => (
            <div key={index} className="flex gap-5">
              <item.Icon className="text-3xl" />
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="font-semibold text-2xl mb-3">Lokasi</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6508636676613!2d106.84820594062495!3d-6.177469693835703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f44d1b33eeff%3A0xf57ee5f74a7ad62f!2sGPIB%20MARANATHA!5e0!3m2!1sid!2sid!4v1754981758188!5m2!1sid!2sid"
          loading="lazy"
          className="w-full h-80"
        ></iframe>
      </div>
    </div>
  );
}

export default JadwalIbadah;
