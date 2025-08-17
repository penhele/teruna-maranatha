// import { Link } from "react-router-dom";
import logoPelkatPt from "./../assets/images/logo-pelkat-pt.png";
// import { FaRegUser } from "react-icons/fa";
// import { IoReorderThree } from "react-icons/io5";

function NavigationBar() {
  // const menu = [
  //   {
  //     name: "Beranda",
  //   },
  //   {
  //     name: "Tentang",
  //   },
  //   {
  //     name: "Kontak",
  //   },
  // ];

  return (
    <div className="flex justify-between items-center mb-5">
      <div className="flex gap-3 items-center">
        <img src={logoPelkatPt} className="w-10" />
        <h1 className="font-medium text-lg">Pelkat PT Maranatha Jakarta</h1>
      </div>
      {/* <div className="hidden sm:flex gap-3">
        {menu.map((item, index) => (
          <div key={index}>
            <p className="font-medium text-lg hover:text-blue-400 cursor-pointer">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <IoReorderThree className="sm:hidden size-6" /> */}

      {/* <Link to="/login">
        <FaRegUser className=" cursor-pointer" />
      </Link> */}
    </div>
  );
}

export default NavigationBar;
