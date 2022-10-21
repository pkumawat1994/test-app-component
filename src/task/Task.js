import React, { useEffect, useState } from "react";
import "./Task.css";

const Task = () => {
  useEffect(() => {
    setTotel(color + power + drive + pkg);
  });
  //   const [focus, setFocus] = useState({
  //     colorFocus: "",
  //     powerFocus: "",
  //     driveFocus: "",
  //     pkg: "",
  //     totel: "",
  //   });
  const [colorFocus, setColorFocus] = useState(false);
  const [powerFocus, setPowerFocus] = useState(false);
  const [driveFocus, setDriveFocus] = useState(false);
  const [pkgFocus, setPkgFocus] = useState(false);

  const [color, setColor] = useState(null);
  const [power, setPower] = useState(null);
  const [drive, setDrive] = useState(null);
  const [pkg, setPkg] = useState(null);
  const [totel, setTotel] = useState(null);
  return (
    <>
      <div className="mainDiv">
        <div>
          <p>{colorFocus}</p>
          <h3>Select Color:</h3>
          <div className="divWrapper">
            <div
              onClick={() => {
                setColor(0);
              }}
              className="innerDiv"
            >
              <div className="colorDiv_a"></div>
            </div>
            <div
              onClick={() => {
                setColor(500);
              }}
              className="innerDiv"
            >
              <div className="colorDiv_b"></div>
            </div>
            <div
              onClick={() => {
                setColor(1000);
              }}
              className="innerDiv"
            >
              <div className="colorDiv_c"></div>
            </div>
          </div>
          <h3>Select Power</h3>
          <div className="divWrapper">
            <div className="innerDiv" onClick={() => setPower(100)}>
              100MM
            </div>
            <div onClick={() => setPower(150)} className="innerDiv">
              150MM
            </div>
            <div className="innerDiv" onClick={() => setPower(200)}>
              200MM
            </div>
          </div>
          <h3>Wrap Drive</h3>
          <div className="divWrapper">
            <div onClick={() => setDrive(0)} className="innerDiv">
              <h6>No</h6> <h6>-0</h6>
            </div>
            <div onClick={() => setDrive(1000)} className="innerDiv">
              {" "}
              <h6>Yes</h6>
              <h6>1000+</h6>
            </div>
          </div>
          <h3>Select Option Package:</h3>
          <div className="divWrapper">
            <div onClick={() => setPkg(0)} className="innerDiv">
              <div className="colorDiv_package_a">Basic</div>
              +0
            </div>
            <div onClick={() => setPkg(500)} className="innerDiv">
              <div className="colorDiv_package_b">Sport</div>
              +500
            </div>
            <div onClick={() => setPkg(1000)} className="innerDiv">
              <div className="colorDiv_package_c">Lux</div>
              +1000
            </div>
          </div>
        </div>

        <div className="sidDiv">
          <div className="valueName">
            <h6>COLOR :-{color}</h6>
            <h6>POWER :-{power}MM</h6>
            <h6>DRIVE :-{drive}+</h6>
            <h6>PACKAGE :-{pkg}</h6>
            <h1 className="totelValues">&nbsp;&nbsp;{totel ? totel : ""}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
