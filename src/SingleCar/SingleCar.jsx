import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SingleCar.css";

export const SingleCar = () => {
  var [enlarge, setEnlarge] = useState(false);
  let location = useLocation();
  console.log(location.state);
  let navigate = useNavigate();
  function click() {
    setEnlarge(true);
  }
  function close() {
    setEnlarge(false);
  }
  function back() {
    navigate("/cars");
  }
  // function seeDetails(term) {
  //   window.open("//google.com/search?q="+term,"_blank")
  // }
  return (
    <div className="main">
      <div id="pic">
        <img id="back" src={location.state.image} alt="" />

        {enlarge ? (
          <>
            <img
              id="enlarge"
              src={location.state.image}
              alt=""
              onClick={close}
            />
          </>
        ) : (
          <>
            <img
              id="mainPic"
              src={location.state.image}
              alt=""
              onClick={click}
            />
            <h1 id="title">{location.state.title}</h1>
            <h2 id="mfg">MFG:{location.state.start_production}</h2>
            <h2 id="varient">class:{location.state.class}</h2>
            <button
              id="viewMore"
              onClick={() => {
                console.log(
                  "detaisl",
                  window.open(
                    "//google.com/search?q=" +
                      location.state.title +
                      " picture 4k&sca_esv=592464911&tbm=isch&sxsrf=AM9HkKmHxyICZNrJuppms1Dq2uipKxIZNA:1703064443722&source=lnms&sa=X&ved=2ahUKEwiB_Mm52Z2DAxV07zgGHd61AGcQ_AUoAXoECAQQAw&biw=1536&bih=334&dpr=1.25",
                    "_blank"
                  )
                );
              }}
            >
              more pictures
            </button>
            <button id="back1" onClick={back}>
              back
            </button>
          </>
        )}
      </div>

      {/* <div id="details">
        
      </div> */}
    </div>
  );
};
