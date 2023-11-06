import i from "../images/boot4.jpeg";
import './ImgSecond.css';

const ImgSecond = () => {
  return (
    <div className="simgfirst">
      <div className="sf2">
        <div>
        <h2>Play Ground <br /> Popel</h2>
        <br />
        <p className="sp1">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The text has
          various versions which has evolved.
        </p><br /><br />
        <p className="sp2">
          Behance Case Study<span className="ss1">--</span>
        </p>
        </div>
      </div>
      <img className="sf1" src={i} alt=".............." />
    </div>
  );
};

export default ImgSecond;
