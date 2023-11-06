import "./middleTwo.css";
import p from "../images/hhhh.jpeg";

const MiddleTwo = () => {
    const gre = '<';
    const les = '>';
  return (
    <div className="mt1">
      <div className="mttop">
        <h1 className="mth1">
          What My
          <br />
          Clients Says.
        </h1>
        <div className="mttopdiv">
            <button className="buttonfor">{gre}</button>
            <button disabled >{les}</button>
        </div>
      </div>
      <div>
        <p className="mtp1">
          "Wilson will patiently listen to you and give you his own Ideas as
          well, and in the end, he comes up with something completey different
          from what you’re expecting, but the good news is, you’ll always love
          it
        </p>
      </div>

      <div className="mtbottom">
        <img className="mtImg" src={p} alt="profilllllllu" />
        <div className="mtbinnerdiv">
          <div>
          <span>Julliet Vandy</span>
          <span className="mts2">Facebook Marketing Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleTwo;
