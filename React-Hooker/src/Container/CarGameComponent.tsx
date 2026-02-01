import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CarGame.css";
import carplace1 from "../../public/images/CarGame/carplace1.png";
import carplace2 from "../../public/images/CarGame/carplace2.png";
import carplace3 from "../../public/images/CarGame/carplace3.png";
import carplace4 from "../../public/images/CarGame/carplace4.png";
import mrbeanCar from "../../public/images/CarGame/mrbeanCar.png";


const CarGameComponent = (): React.JSX.Element => {
  const [startCar, setstartCar] = useState<boolean>(false);
  const [backimg, setbackimg] = useState<number>(0);

  const navigator = useNavigate();
  return (
    <div>
      <div id="carHeader">
        <div id="CarMain">
          <div className="carGameHeader">
            <div className="carGameScreen">
              <div className="Game Car">
                {" "}
                <img src={mrbeanCar} alt="mrbeanCar" className="carBody" />
              </div>
              <div className={startCar ? "caroussalrun" : "caroussalstop"}>
                <div
                  className={
                    startCar ? "groupcaroussalrun" : "groupcaroussalstop"
                  }
                >
                  {" "}
                  <img
                    className="cardCarousal"
                    src={
                      backimg === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                  <img
                    className="cardCarousal"
                    src={
                      backimg % 4 === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                  <img
                    className="cardCarousal"
                    src={
                      backimg % 4 === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                  <img
                    className="cardCarousal"
                    src={
                      backimg % 4 === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                  <img
                    className="cardCarousal"
                    src={
                      backimg % 4 === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                  <img
                    className="cardCarousal"
                    src={
                      backimg % 4 === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                </div>{" "}
                <div
                  aria-hidden
                  className={
                    startCar ? "groupcaroussalrun" : "groupcaroussalstop"
                  }
                >
                  <img
                    className="cardCarousal"
                    src={
                      backimg % 4 === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                  <img
                    className="cardCarousal"
                    src={
                      backimg % 4 === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                  <img
                    className="cardCarousal"
                    src={
                      backimg % 4 === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                  <img
                    className="cardCarousal"
                    src={
                      backimg % 4 === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                  <img
                    className="cardCarousal"
                    src={
                      backimg % 4 === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                  <img
                    className="cardCarousal"
                    src={
                      backimg % 4 === 0
                        ? carplace1
                        : backimg === 1
                        ? carplace2
                        : backimg === 2
                        ? carplace3
                        : carplace4
                    }
                    alt="carplace1"
                  />
                </div>
              </div>
            </div>
            <div className="carButton">
              {" "}
              <div>
                <div>
                  <div>
                    <button
                      onClick={() => {
                        setbackimg((backimg + 1) % 4);
                      }}
                    >
                      changeBackground
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setstartCar(true);
                    }}
                  >
                    start
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setstartCar(false);
                    }}
                  >
                    stop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="CarNav">
          <button
            onClick={() => {
              navigator("/");
            }}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarGameComponent;
