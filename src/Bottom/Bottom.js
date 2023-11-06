import "./Bottom.css";

const Bottom = () => {
  return (
    <div className="bottomcard">
      <div className="bottom">
      <div className="bottomflex1">
        <h2 className="bottomh2">KING OF JOKER</h2>
        <ul className="bottomul">
          <li className="bottomulli">Fb.</li>
          <li className="bottomulli">Tw.</li>
          <li className="bottomulli">Db.</li>
          <li className="bottomulli">Fb.</li>
        </ul>
        <p className="bp1">
          Feel free to reach out to me anytime.I prefer to talk over email,
          especialy since we may be a few time zones away.
        </p>
        <p className="bp2">kingofkotha@gmail.com</p>
        <p className="bp3">2022 by kingof joker</p>
      </div>
      <div className="bottomflex2">
        <h1 className="bottomh1">LET'S WORK <br />TOGETHER</h1>
        <div className="bf2d">
        <input className="bf2i1" type="text" id="fname" name="fname" placeholder="Full Name" />
        <input className="bf2i2" type="mobile number" id="num" name="num" placeholder="Phone No." />
        </div>
        <textarea className="bf2i3" type="text" rows='4' id="ymessage" name="ymessage" placeholder="Type Your Message Here" /><br />
        <button className="bf2b" type="button" >Send Message</button>
      </div>
      </div>
    </div>
  );
};

export default Bottom;
