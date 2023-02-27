import React, { useState } from "react";
import { Container } from "react-bootstrap";
import img from "../assets/image/png/img.png";
import vido from "../assets/image/png/vido1.png";
import gril from "../assets/image/png/header_img.png";
import col_img from "../assets/image/png/col_img.png";
import sms from "../assets/image/png/sms.png";
import img_boy from "../assets/image/png/img_boy.png";
import nav_img from "../assets/image/png/nav_img.png";

function Header() {
  const [name, setName] = useState(false);
  if (name) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className="bg_header d-flex flex-column min_vh_100">
        <nav className="bg_nav py-3">
          <div className="container ">
            <div className="d-flex pb-0 align-items-center justify-content-between">
              <div className=" position-relative">
                <h2 className="fs_32 c_p fw_700 ff_pop mb-0 text-white">
                  TOTC
                </h2>
                <img
                  className=" position-absolute-nav"
                  src={nav_img}
                  alt="nav_img"
                />
              </div>
              <div
                onClick={() => setName(true)}
                className="navdot d-md-none pt-2"
              >
                <div className="navmanu"></div>
                <div className="navmanu my-2"></div>
                <div className="navmanu"></div>
              </div>
              {/* <div> */} {/* </div> */}
              <ul
                data-aos-duration="1000"
                data-aos="fade-down-left"
                className="d-md-flex d-none align-items-center ps-0 mb-0"
              >
                <li className="">
                  <a
                    className="text-decoration-none ff_pop fs_22 fw_400 me-lg-5 me-4 before position-relative text-white text_h   line"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-decoration-none ff_pop fs_22 fw_400 me-lg-5 me-4 before position-relative text-white text_h  line"
                    href="#popular"
                  >
                    Courses
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-decoration-none ff_pop fs_22 fw_400 me-lg-5 me-4 before position-relative text-white text_h  line "
                    href="#travelaes"
                  >
                    Courses
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-decoration-none ff_pop fs_22 fw_400 me-lg-5 me-4 before position-relative text-white text_h  line "
                    href="#memories"
                  >
                    Blog
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-decoration-none ff_pop fs_22 fw_400 me-4 before position-relative text-white text_h  line "
                    href="#memories"
                  >
                    About Us
                  </a>
                </li>
                <a className="but me-4 fs_22 fw_500 ff_pop color_gray" href="#">
                  Login
                </a>
                <a className="but1 fs_22 fw_500 ff_pop color_gray" href="#">
                  Sign Up
                </a>
              </ul>
            </div>

            <div className={`${name ? "show" : "hide"}`}>
              <a
                onClick={() => setName(false)}
                className="d-md-none text-decoration-none d-flex justify-content-end me-3 "
                href="#"
              >
                <img className="position-absolute1" src={img} alt="img" />
              </a>

              <ul className="d-md-none d-flex flex-column justify-content-center min-vh-100 align-items-center ps-0 mb-0 gap-4">
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_pop fs_22 fw_400 text-white  position-relative line d-inline "
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_pop fs_22 fw_400 text-white  position-relative line d-inline "
                    href="#"
                  >
                    Courses
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_pop fs_22 fw_400 text-white  position-relative line d-inline"
                    href="#"
                  >
                    Courses
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_pop fs_22 fw_400 text-white  position-relative line d-inline "
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="">
                  <a
                    onClick={() => setName(false)}
                    className="text-decoration-none ff_pop fs_22 fw_400 text-white  position-relative line d-inline "
                    href="#"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-bootom mt-2"></div>
          </div>{" "}
        </nav>
        <div className="d-flex flex-column mt-4 mt-md-0 justify-content-center flex-grow-1 ">
          <Container>
            <div className="row justify-content-between align-items-center">
              <div className="col-md-5">
                <h2 className="fs_54 fw_700 ff_pop text-white  text-center text-md-start">
                  <span className="ff_nun color_orang">Studying</span> Online is
                  now much easier
                </h2>
                <p className="fs_22 fw_400 pt-3 mb-lg-5 mb-4 text-center text-md-start ff_nun text-white">
                  TOTC is an interesting platform that will teach you in more an
                  interactive way
                </p>
                <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                  <a
                    className="but1 me-4 fs_22 fw_500 ff_pop text-white"
                    href="#"
                  >
                    Join for free
                  </a>
                  <img className="w-10 me-3" src={vido} alt="vido" />
                  <h3 className="fs_20 mb-0 fw_400 ff_pop color_dark_blue">
                    Watch how it works
                  </h3>
                </div>
              </div>
              {/* <div className="col-2"></div> */}
              <div className="col-md-5 position-relative ">
                {/* <div className="position-relative"> */}
                <img className="w-100" src={gril} alt="gril" />
                <div className=" card d-lg-flex d-none position-abso">
                  <div className="d-flex align-items-center">
                    <img className="" src={col_img} alt="col_img" />
                    <div className="ps-3">
                      <p className="mb-0 fs_24 fw_700 ff_nun color_light-blue">
                        250k
                      </p>
                      <p className="mb-0 fs_20 fw_400 ff_nun color_light_gray">
                        Assisted Student
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" card1 d-lg-flex d-none  position-abso1">
                  <div className="d-flex align-items-center">
                    <img className="" src={sms} alt="sms" />
                    <div className="ps-3">
                      <p className="mb-0 fs_24 fw_700 ff_nun color_light-blue">
                        Congratulations
                      </p>
                      <p className="mb-0 fs_20 fw_400 ff_nun color_light_gray">
                        Your admission completed
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" card3 d-lg-block d-none  position-abso2">
                  <div className="d-flex align-items-center">
                    <img className="" src={img_boy} alt="img_boy" />
                    <div className="ps-2">
                      <p className="fs_20 fw_400 ff_nun color_gray mb-0">
                        User Experience Class
                      </p>
                      <p className="fs_20 fw_400 ff_nun color_gray mb-0">
                        Today at 12.00 PM
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 d-flex justify-content-end">
                    <a
                      className="but_red me-4 fs_22 fw_500 ff_pop text-white"
                      href="#"
                    >
                      Join for free
                    </a>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Header;
