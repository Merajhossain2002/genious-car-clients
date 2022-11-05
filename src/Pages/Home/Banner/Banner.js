import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} alt="c-img" className="w-full" />
        {/* Navigation btn for banner */}
        <div className="absolute flex justify-end bottom-14 right-5">
          <a
            href="#slide6"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❯
          </a>
        </div>
        {/* text heading for banner */}
        <div className="absolute flex justify-end bottom-14 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Affordable <br />
            Price for car <br />
            Services
          </h1>
        </div>
        {/* text paragraph for banner */}
        <div className="absolute flex justify-start bottom-14  w-2/5 left-24 top-2/4">
          <p className="text-white text-xl">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        {/* button on banner */}
        <div className="absolute flex justify-end bottom-14 left-24 top-2/3">
          <button className="btn btn-ghost bg-firstColor text-white mr-5 hover:bg-secondColor">
            Discover More
          </button>
          <button className="btn btn-outline border-white text-white">
            Latest Projects
          </button>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} alt="c-img" className="w-full" />
        <div className="absolute flex justify-end bottom-14 left-5 right-5">
          <a
            href="#slide1"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} alt="c-img" className="w-full" />
        <div className="absolute flex justify-end bottom-14 left-5 right-5">
          <a
            href="#slide2"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} alt="c-img" className="w-full" />
        <div className="absolute flex justify-end bottom-14 left-5 right-5">
          <a
            href="#slide3"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} alt="c-img" className="w-full" />
        <div className="absolute flex justify-end bottom-14 left-5 right-5">
          <a
            href="#slide4"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} alt="c-img" className="w-full" />
        <div className="absolute flex justify-end bottom-14 left-5 right-5">
          <a
            href="#slide5"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle  hover:bg-firstColor hover:border-firstColor mx-2"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
