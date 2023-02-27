import React from "react";
import { Container } from "react-bootstrap";
import Group2 from "../assets/image/png/Group2.png";
import icon2 from "../assets/image/png/icon2.png";
import icon3 from "../assets/image/png/icon3.png";
import icon4 from "../assets/image/png/icon4.png";

function Features() {
  return (
    <>
      <section className="py-5">
        <Container>
          <h3 className="text-center fs_44 color_blue fw_600 ff_pop">
            Our <span className="color_dark_green">Features</span>
          </h3>
          <p className="max_1100 mx-auto text-center fs_24 fw_400 ff_pop color_1">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
          <div className="row align-items-center pt-md-5 pt-3">
            <div className="col-md-7">
              <img className="w-100" src={Group2} alt="Group2" />
            </div>
            <div className="col-md-5 mt-4 mt-md-0">
              <h3 className=" fs_40 color_blue fw_600 ff_pop">
                A<span className="color_dark_green"> user interface </span>
                designed for the classroom{" "}
              </h3>
              <div className="d-flex align-items-center mt-4">
                <img src={icon2} alt="icon2" />
                <p className="fs_22 fw_400 ff_pop color_1 mb-0 ps-3">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </div>
              <div className="d-flex align-items-center mt-4">
                <img src={icon3} alt="icon2" />
                <p className="fs_22 fw_400 ff_pop color_1 mb-0 ps-3">
                  TA’s and presenters can be moved to the front of the class.
                </p>
              </div>
              <div className="d-flex align-items-center mt-4">
                <img src={icon4} alt="icon2" />
                <p className="fs_22 fw_400 ff_pop color_1 mb-0 ps-3">
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Features;
