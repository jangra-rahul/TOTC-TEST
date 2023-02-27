import React from "react";
import { Container } from "react-bootstrap";
import Group from "../assets/image/png/Group.png";
import Group1 from "../assets/image/png/Group1.png";

function Totc() {
  return (
    <>
      <section className="py-4">
        <Container>
          <h3 className="text-center fs_44 color_blue fw_600 ff_pop">
            What is <span className="color_dark_green">TOTC?</span>
          </h3>
          <p className="max_1100 mx-auto text-center fs_24 fw_400 ff_pop color_1">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
          <div className="row mt-5">
            <div className="col-md-6 position-relative">
              <div className="overlay d-flex flex-column justify-content-center align-items-center  ">
                <h2 className="fs_32 fw_600 pop text-white mb-3">
                  FOR INSTRUCTORS
                </h2>
                <div className="mt-4">
                  <a
                    className="start_but fs_22 fw_500 ff_pop text-white"
                    href="#"
                  >
                    Start a class today
                  </a>
                </div>
              </div>
              <img className="w-100" src={Group} alt="Group" />
            </div>
            <div className="col-md-6 mt-3 mt-md-0 position-relative">
              <div className="overlay d-flex flex-column justify-content-center align-items-center  ">
                <h2 className="fs_32 fw_600 pop text-white mb-3">
                  FOR INSTRUCTORS
                </h2>
                <div className="mt-4">
                  <a
                    className="start_but fs_22 fw_500 ff_pop text-white"
                    href="#"
                  >
                    Start a class today
                  </a>
                </div>
              </div>
              <img className="w-100" src={Group1} alt="Group" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Totc;
