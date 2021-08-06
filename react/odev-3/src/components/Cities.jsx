import { useWeather } from '../context/WeatherContext';

const Cities = () => {
  const cities = [
    { id: 1, name: 'Adana' },
    { id: 2, name: 'Adiyaman' },
    { id: 3, name: 'Afyonkarahi̇sar' },
    { id: 4, name: 'Ağri' },
    { id: 5, name: 'Amasya' },
    { id: 6, name: 'Ankara' },
    { id: 7, name: 'Antalya' },
    { id: 8, name: 'Artvi̇n' },
    { id: 9, name: 'Aydin' },
    { id: 10, name: 'Balikesi̇r' },
    { id: 11, name: 'Bi̇leci̇k' },
    { id: 12, name: 'Bi̇ngöl' },
    { id: 13, name: 'Bi̇tli̇s' },
    { id: 14, name: 'Bolu' },
    { id: 15, name: 'Burdur' },
    { id: 16, name: 'Bursa' },
    { id: 17, name: 'Çanakkale' },
    { id: 18, name: 'Çankiri' },
    { id: 19, name: 'Çorum' },
    { id: 20, name: 'Deni̇zli̇' },
    { id: 21, name: 'Di̇yarbakir' },
    { id: 22, name: 'Edi̇rne' },
    { id: 23, name: 'Elaziğ' },
    { id: 24, name: 'Erzi̇ncan' },
    { id: 25, name: 'Erzurum' },
    { id: 26, name: 'Eski̇şehi̇r' },
    { id: 27, name: 'Gazi̇antep' },
    { id: 28, name: 'Gi̇resun' },
    { id: 29, name: 'Gümüşhane' },
    { id: 30, name: 'Hakkari̇' },
    { id: 31, name: 'Hatay' },
    { id: 32, name: 'Isparta' },
    { id: 33, name: 'Mersi̇n' },
    { id: 34, name: 'İstanbul' },
    { id: 35, name: 'İzmi̇r' },
    { id: 36, name: 'Kars' },
    { id: 37, name: 'Kastamonu' },
    { id: 38, name: 'Kayseri̇' },
    { id: 39, name: 'Kirklareli̇' },
    { id: 40, name: 'Kirşehi̇r' },
    { id: 41, name: 'Kocaeli̇' },
    { id: 42, name: 'Konya' },
    { id: 43, name: 'Kütahya' },
    { id: 44, name: 'Malatya' },
    { id: 45, name: 'Mani̇sa' },
    { id: 46, name: 'Kahramanmaraş' },
    { id: 47, name: 'Mardi̇n' },
    { id: 48, name: 'Muğla' },
    { id: 49, name: 'Muş' },
    { id: 50, name: 'Nevşehi̇r' },
    { id: 51, name: 'Ni̇ğde' },
    { id: 52, name: 'Ordu' },
    { id: 53, name: 'Ri̇ze' },
    { id: 54, name: 'Sakarya' },
    { id: 55, name: 'Samsun' },
    { id: 56, name: 'Si̇i̇rt' },
    { id: 57, name: 'Si̇nop' },
    { id: 58, name: 'Si̇vas' },
    { id: 59, name: 'Teki̇rdağ' },
    { id: 60, name: 'Tokat' },
    { id: 61, name: 'Trabzon' },
    { id: 62, name: 'Tunceli̇' },
    { id: 63, name: 'Şanliurfa' },
    { id: 64, name: 'Uşak' },
    { id: 65, name: 'Van' },
    { id: 66, name: 'Yozgat' },
    { id: 67, name: 'Zonguldak' },
    { id: 68, name: 'Aksaray' },
    { id: 69, name: 'Bayburt' },
    { id: 70, name: 'Karaman' },
    { id: 71, name: 'Kirikkale' },
    { id: 72, name: 'Batman' },
    { id: 73, name: 'Şirnak' },
    { id: 74, name: 'Bartin' },
    { id: 75, name: 'Ardahan' },
    { id: 76, name: 'Iğdir' },
    { id: 77, name: 'Yalova' },
    { id: 78, name: 'Karabük' },
    { id: 79, name: 'Ki̇li̇s' },
    { id: 80, name: 'Osmani̇ye' },
    { id: 81, name: 'Düzce' },
  ];

  const { setCity } = useWeather();

  function handleChange(e) {
    console.log(e.target.value);
    setCity(e.target.value.toLocaleLowerCase());
  }

  return (
    <div className="cities">
      <select
        className="input"
        name="cities"
        id="cities"
        onChange={handleChange}
      >
        {cities.map((value) => {
          return (
            <option value={value.name} key={value.id}>
              {value.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Cities;
