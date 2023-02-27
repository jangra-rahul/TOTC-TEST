import React from "react";
import { Container } from "react-bootstrap";
import Group4 from "../assets/image/png/Group4.png";

function Assessments() {
  return (
    <>
      <section className="py-md-5 pt-5">
        <Container>
          {" "}
          <div className="row flex-column-reverse flex-md-row justify-content-between align-items-center">
            <div className="col-md-6 mt-3  mt-md-0 position-relative">
              <img
                className="w-100 position-relative z_index"
                src={Group4}
                alt="class"
              />
            </div>
            <div className="col-md-5 position-relative">
              <h5 className="fs_40 position-relative z_index text-center text-md-start fw_500 ff_pop color_blue">
                Assessments,
                <span className="fw_700 ff_nun color_dark_green">
                  Quizzes,
                </span>{" "}
                Tests
              </h5>
              <p className="fs_22 text-center text-md-start  pt-3 fw_400 ff_pop color_1">
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Assessments;
