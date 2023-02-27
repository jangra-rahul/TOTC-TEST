import React from "react";
import { Container } from "react-bootstrap";
import classroom from "../assets/image/png/class.png";
import posi_img from "../assets/image/png/posi_img.png";
import posi_img1 from "../assets/image/png/posi_img1.png";
import green_img from "../assets/image/png/green_img.png";

function Classroom() {
  return (
    <>
      <section className="py-5">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6 position-relative">
              <img
                className="position-absolute_green"
                src={green_img}
                alt="green_img"
              />
              <h5 className="fs_32 position-relative z_index text-center text-md-start fw_500 ff_pop color_blue">
                Everything you can do in a physical classroom,{" "}
                <span className="fw_700 ff_nun color_dark_green">
                  you can do with TOTC
                </span>
              </h5>
              <p className="fs_22 text-center text-md-start  pt-3 fw_400 ff_pop color_1">
                TOTC’s school management software helps traditional and online
                schools manage scheduling, attendance, payments and virtual
                classrooms all in one secure cloud-based system.
              </p>
              {/* <div> */}
              <a className="fs_20 fw_500 ff_pop color_1" href="#">
                Learn more
              </a>
              {/* </div> */}
              <div className="border_"></div>
            </div>
            <div className="col-md-6 mt-5  mt-md-0 position-relative">
              <img
                className="w-100 position-relative z_index"
                src={classroom}
                alt="class"
              />
              <img
                className="position-abso-11 d-md-block d-none"
                src={posi_img}
                alt="posi_img"
              />
              <img
                className="position-abso-12 d-md-block d-none"
                src={posi_img1}
                alt="posi_img"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Classroom;
