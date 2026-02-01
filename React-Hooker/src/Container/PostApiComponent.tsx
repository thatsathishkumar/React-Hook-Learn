import React from "react";
import { useNavigate } from "react-router-dom";
import computer from "../../public/images/PostApiGame/computer.png";
import server from "../../public/images/PostApiGame/server.png";
import dataPack from "../../public/images/PostApiGame/packageData.png";
import mailData from "../../public/images/PostApiGame/mailData.png";

import "../styles/PostApi.css";

const PostApiComponent = (): React.JSX.Element => {
  const navigator = useNavigate();
  return (
    <div>
      <div className="mainPost">
        <div className="headdiv">
          <div className="PostMain">
            <img src={computer} alt="computer" className="child computer"></img>
            <div className="child pipe">
              <img
                src={dataPack}
                alt="dataPack"
                className="rightPipestop"
              ></img>
              <img src={mailData} alt="mailData" className="leftPipestop"></img>
            </div>
            <img src={server} alt="server" className="child server"></img>
          </div>
        </div>
        <div className="navdiv">
          <button
            onClick={() => {
              navigator("/");
            }}
          >
            return
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostApiComponent;
