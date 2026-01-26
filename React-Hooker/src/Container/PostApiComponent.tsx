import React from "react";
import { useNavigate } from "react-router-dom";
import computer from "../../public/images/PostApiGame/computer.png";
import server from "../../public/images/PostApiGame/server.png";

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
              <div className="rightPipe"></div>
              <div className="leftPipe"></div>
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
