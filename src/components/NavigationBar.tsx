import logoPelkatPt from "./../assets/images/logo-pelkat-pt.png";

function NavigationBar() {
  const menu = [
    {
      name: "Beranda",
    },
    {
      name: "Tentang",
    },
    {
      name: "Kontak",
    },
  ];

  return (
    <div className="flex justify-between items-center mb-5">
      <div className="flex gap-3 items-center">
        <img src={logoPelkatPt} className="w-10" />
        <h1 className="font-medium text-lg">Pelkat PT Maranatha Jakarta</h1>
      </div>
      <div className="flex gap-3">
        {menu.map((item) => (
          <div>
            <p className="font-medium text-lg hover:text-blue-400 cursor-pointer">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationBar;
