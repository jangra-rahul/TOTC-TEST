import React from "react";
import { Container } from "react-bootstrap";
import Group3 from "../assets/image/png/Group3.png";

function Teachers() {
  return (
    <>
      <section className="py-md-5 pt-3">
        <Container>
          {" "}
          <div className="row justify-content-between align-items-center">
            <div className="col-md-5 position-relative">
              <h5 className="fs_40 position-relative z_index text-center text-md-start fw_500 ff_pop color_blue">
                <span className="fw_700 ff_nun color_dark_green">Tools</span>{" "}
                For Teachers And Learners{" "}
              </h5>
              <p className="fs_22 text-center text-md-start  pt-3 fw_400 ff_pop color_1">
                TOTC’s school management software helps traditional and online
                schools manage scheduling, attendance, payments and virtual
                classrooms all in one secure cloud-based system.
              </p>
            </div>
            <div className="col-md-6 mt-5  mt-md-0 position-relative">
              <img
                className="w-100 position-relative z_index"
                src={Group3}
                alt="class"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Teachers;
