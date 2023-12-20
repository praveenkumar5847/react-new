import React, { useState } from "react";
import "./Cars.css";
import { useNavigate } from "react-router-dom";

let theData = require("./../database.json");




export const Cars = () => {
  let finaldata=theData.sort((a,b)=>a.title.localeCompare(b.title))
    const [MainData, setMainData] = useState(finaldata);
    console.log(MainData);
    let [isHover, setHover] = useState(false);
    let navigate = useNavigate();
    
    let changeInput = (e) => {
        let targetVal = e.target.value.toLowerCase()
        let filterData = theData.filter((ele) => {
            let filterVal = ele.title.toLowerCase()
            return filterVal.includes(targetVal);
        })
        setMainData(filterData);
    };  
    
  return (
    <div id="item" style={{ borderRadius: "20px", marginLeft:"100px"}}>
      <div id="searchBar">
        <input id="txt" type="text" placeholder="search cars" onChange={changeInput} />
      </div>

      {MainData.map((ele) => {
        function hover() {
          setHover(false);
        }
        function hoverOut() {
          setHover(true);
        }

        function click() {
          console.log(ele);
          navigate("/singleCar", { state: ele });
        }

        var bgcolor = isHover === true ? "rgb(179, 1, 228)" : "black";

        return (
          <div
            className="items"
            style={{
              backgroundColor: { bgcolor },
              width: "20%",
              height: "400px",
              float: "left",
              position: "relative",
              marginLeft: "50px",
              margin: "20px",
              borderRadius: "20px",
              textAlign: "center",
            }}
            onMouseEnter={hover}
            onMouseLeave={hoverOut}
            onClick={click}
          >
            <img
              src={ele.image}
              alt={ele.title}
              style={{
                width: "100%",
                height: "60%",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            />
            <h4
              style={{
                fontFamily: "cursive",
                color: "white",
                marginTop: "-5px",
              }}
            >
              name:{ele.title}
            </h4>
            <h5
              style={{
                fontFamily: "cursive",
                color: "white",
                marginTop: "-5px",
              }}
            >
              mfg year :{ele.start_production}
            </h5>
            <h5 style={{ fontFamily: "cursive", color: "white" }}>
              class :{ele.class}
            </h5>
            {/* <button
              onClick={click}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "17px",
                border: `2px solid white`,
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "rgb(179, 1, 228)",
              }}
            >
              view car
            </button> */}
          </div>
        );
      })}
    </div>
  );
};
