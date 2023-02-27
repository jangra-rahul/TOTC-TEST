import React from "react";
import { Container } from "react-bootstrap";
import nav_img from "../assets/image/png/nav_img.png";

function Footer() {
  return (
    <>
      <section className="bg_footer pt-md-5 pt-5 pb-3">
        <Container>
          <div className="d-flex justify-content-center">
            <div className=" position-relative ">
              <h2 className="fs_32 pe-5 fw_700 c_p ff_pop mb-0 text-white">
                TOTC
              </h2>
              <img
                className=" position-absolute-nav-img"
                src={nav_img}
                alt="nav_img"
              />
            </div>
            <div className="border_1"></div>
            <h2 className="fs_22 fs_600 ff_pop text-white ms-4 mb-0 max_159">
              Virtual Class for Zoom
            </h2>
          </div>
          <h3 className="fs_26 fw_500 ff_pop mb-0 color_light-gray text-center pt-5">
            Subscribe to get our Newsletter
          </h3>
          <div className="d-flex align-items-center justify-content-center mt-4 mb-4">
            <input
              className="fs_18 w-100 fw_500 ff_pop color_1"
              type="text"
              placeholder="Your Email"
            />
            <button className="sub_button">Subscribe</button>
          </div>
          <div className="d-flex justify-content-center pt-mt-5 pt-3">
            <p className="fs_22 fw_500 ff_pop color_1 c_p">Careers</p>
            <div className="border_right mt-1 ms-3  me-3"></div>
            <p className="fs_22 fw_500 ff_pop color_1 c_p">Privacy Policy</p>
            <div className="border_right mt-1 ms-3 me-3"></div>
            <p className="fs_22 fw_500 ff_pop color_1 c_p">
              Terms & Conditions
            </p>
          </div>
          <p className="fs_20 fw_500 ff_pop color_1 text-center">
            © 2021 Class Technologies Inc.{" "}
          </p>
        </Container>
      </section>
    </>
  );
}

export default Footer;
