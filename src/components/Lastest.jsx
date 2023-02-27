import React from "react";
import { Container } from "react-bootstrap";
import Group5 from "../assets/image/png/Group5.png";
import Rect1 from "../assets/image/png/Rect1.png";
import Rect2 from "../assets/image/png/Rect2.png";
import Rect3 from "../assets/image/png/Rect3.png";

function Lastest() {
  return (
    <>
      <section className="py-md-5 py-3">
        <Container>
          <h2 className="fs_36 text-center fw_700 ff_nun color_blue">
            Lastest News and Resources
          </h2>
          <p className="fs_22 fw_400 ff_nun color_1 text-center">
            See the developments that have occurred to TOTC in the world
          </p>
          <div className="row py-md-4 justify-content-between pt-md-5 pt-3">
            <div className="col-md-5">
              <img className="w-100 mb-4" src={Group5} alt="Group5" />
              <a className="fs_20 fw_500 ff_pop but2 text-white" href="#">
                NEWS
              </a>
              <h2 className="fs_26 mt-4 fw_500 ff_pop color_dark_blue">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </h2>
              <p className="fs_20 fw_500 pt-2 ff_pop color_1">
                {" "}
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
              <a className="fs_20 fw_500 ff_pop color_1" href="#">
                Read more
              </a>
              <div className="border_"></div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="row align-items-center">
                <div className="col-5">
                  <div className=" position-relative">
                    <img className="w-100" src={Rect1} alt="Rect1" />
                    <a className="but3 text-white position-absol" href="#">
                      PRESS RELEASE
                    </a>
                  </div>
                </div>
                <div className="col-7">
                  <h2 className="fs_22 fw_500 ff_pop color_dark_blue">
                    Class Technologies Inc. Closes $30 Million Series A
                    Financing to Meet High Demand
                  </h2>
                  <p className="fs_20 mb-0 fw_500 ff_pop color_1">
                    Class Technologies Inc., the company that created Class,...
                  </p>
                </div>
              </div>
              <div className="row mt-4 align-items-center">
                <div className="col-5">
                  <div className=" position-relative">
                    <img className="w-100" src={Rect2} alt="Rect1" />
                    <a className="but3 text-white position-absol" href="#">
                      NEWS
                    </a>
                  </div>
                </div>
                <div className="col-7">
                  <h2 className="fs_22 fw_500 ff_pop color_dark_blue">
                    Class Technologies Inc. Closes $30 Million Series A
                    Financing to Meet High Demand
                  </h2>
                  <p className="fs_20 mb-0 fw_500 ff_pop color_1">
                    Class Technologies Inc., the company that created Class,...
                  </p>
                </div>
              </div>
              <div className="row mt-4 align-items-center">
                <div className="col-5">
                  <div className=" position-relative">
                    <img className="w-100" src={Rect3} alt="Rect1" />
                    <a className="but3 text-white position-absol" href="#">
                      NEWS
                    </a>
                  </div>
                </div>
                <div className="col-7">
                  <h2 className="fs_22 fw_500 ff_pop color_dark_blue">
                    Class Technologies Inc. Closes $30 Million Series A
                    Financing to Meet High Demand
                  </h2>
                  <p className="fs_20 mb-0 fw_500 ff_pop color_1">
                    Class Technologies Inc., the company that created Class,...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Lastest;
