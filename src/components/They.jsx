import React from "react";
import { Container } from "react-bootstrap";
import Group6 from "../assets/image/png/Group6.png";
import star from "../assets/image/png/star.png";
import arrow from "../assets/image/png/arrow.png";
import line from "../assets/image/png/line.png";

function They() {
  return (
    <>
      <section className="py-5">
        <Container>
          <div className="row pb-md-5 pb-3 align-items-center justify-content-between">
            <div className="col-md-5">
              <div className="d-flex align-items-center">
                <div className="border_start"></div>
                <h2 className="fs_20 fw_400 ff_pop color_light_blue mb-0 ps-3">
                  T E S T I M O N I A L
                </h2>
              </div>
              <h2 className="fs_60 fw_700 ff_nun color_blue mt-4">
                What They Say?
              </h2>
              <p className="fs_22 fw_400 ff_pop color_1 mb-0 mt-4">
                TOTC has got more than 100k positive ratings from our users
                around the world.{" "}
              </p>
              <p className="fs_22 fw_400 ff_pop color_1 mb-0 mt-4">
                Some of the students and teachers were greatly helped by the
                Skilline.
              </p>
              <p className="fs_22 fw_400 ff_pop color_1 mb-0 mt-4">
                Are you too? Please give your assessment
              </p>
              <div className="d-flex input_box mt-4 justify-content-between">
                <input
                  className="input w-100"
                  type="text"
                  placeholder="Write your assessment"
                />
                <button className="right_but">&rarr;</button>
              </div>
            </div>
            <div className="col-md-5 mt-4 mt-md-0">
              <div className="position-relative">
                <img className="w-100" src={Group6} alt="Group6" />
                <div className="d-sm-block d-none">
                  <img className="abso bg" src={arrow} alt="arrow" />
                </div>
                <div className="img_box d-sm-block d-none absolute ">
                  <div className="position-relative">
                    <img className="position" src={line} alt="line" />
                    <div className="d-flex">
                      <div className="border_start_ me-4"></div>
                      <p className="max_534 fs_20 fw_400 ff_pop color_1 ">
                        "Thank you so much for your help. It's exactly what I've
                        been looking for. You won't regret it. It really saves
                        me time and effort. TOTC is exactly what our business
                        has been lacking."
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <h4 className="fs_22 fw_600 ff_nun color_1 ps-4">
                        {" "}
                        Gloria Rose
                      </h4>
                      <div>
                        <img src={star} alt="star" />
                        <p className="fs_18 fw_600 ff_nun color_1 mb-0">
                          12 reviews at Yelp
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default They;
