import React from 'react'
import "./Main.css"
import { useNavigate } from 'react-router-dom';
export const Main = () => {
  let navigate=useNavigate()
  function click() {
    console.log();
    navigate("/cars");
  }
    const videos = document.querySelectorAll(".banner");

    videos.forEach((video) => {
      video.addEventListener("mouseover", () => {
        video.play();
      });

      video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 2;
      });
    });
  return (
    <div>
      <video
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-dealer-vertical-video-design-template-3eaf54087bd858f4a67a05865d07df22_screen.mp4?ts=1673870035"
        className="vid"
        muted
        autoPlay
        onClick={click}
      ></video>
      <video
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-dealer-vertical-video-design-template-e679e6df11a963f1f28fca0c6a6d394b_screen.mp4?ts=1673870837"
        className="vid"
        muted
        autoPlay
        loop
        onClick={click}
      ></video>
      <video
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-auto-dealer-video-ad-design-template-e0e2ff51b9973b3c997992d53b293107_screen.mp4?ts=1637039633"
        className="vid"
        muted
        autoPlay
        loop
        onClick={click}
      ></video>
      <video
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-wash-flyer-template-design-5ce6e7d407783564073067b14fb1dcc4_screen.mp4?ts=1664174266"
        className="banner"
        autoPlay
        muted
        loop
        onClick={click}
      ></video>
      <div id="footer">
        <h3>Praveen cars.PVT LTD</h3>
        <p>
          9/259,Dhamu Nagar,Bodipatti,<br></br> udumalpet ,642154,<br></br> PH
          :- 8072405847<br></br> mail :- <a href>praveenkumar@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
