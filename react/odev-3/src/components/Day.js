const Day = ({ day, img, min, max }) => {
  const photo = require(`../assets/${img}.png`).default;

  return (
    <div className="day">
      <div className="header">{day}</div>
      <img className="weather-img" src={photo} alt="" />
      <div className="degrees">
        <span className="max">{max}°</span>
        <span className="min">{min}°</span>
      </div>
    </div>
  );
};

export default Day;
