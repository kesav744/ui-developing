import i from "../images/boot4.jpeg";
import './ImgFirst.css';

const ImgFirst = () => {
  return (
    <div className="imgfirst">
      <img className="f1" src={i} alt=".............." />
      <div className="f2">
        <div>
        <h2>Play Ground <br /> Popel</h2>
        <br />
        <p className="p1">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The text has
          various versions which has evolved.
        </p><br /><br />
        <p className="p2">
          Behance Case Study<span className="s1">--</span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default ImgFirst;
