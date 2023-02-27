import React from "react";
import { Container } from "react-bootstrap";
import Cards from "../Cards";

function Software() {
  return (
    <>
      <section className="pb-5 pt-xl-4">
        <Container>
          <h3 className="fs_36 fw_600 ff_pop color_blue max_750 mx-auto text-center pb-3">
            All-In-One{" "}
            <span className="fw_700 color_dark_green">Cloud Software.</span>
          </h3>
          <p className="fs_22 fw_400 ff_pop color_dark_gray max_750 mx-auto text-center">
            TOTC is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
          <div className="row pt-md-5 mt-md-5 justify-content-center">
            {Cards.map((data) => {
              return (
                <div className="col-md-4 mt-5 mt-md-0 col-sm-6 p-3">
                  <div className="box position-relative">
                    <img className="position_img" src={data.image} alt="" />
                    <h2 className="fs_32 text-center pt-5 fw_500 ff_pop pt-2 color_blue">
                      {data.heading}
                    </h2>
                    <p className="fs_20 text-center fw_400 ff_pop color_1">
                      {data.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Software;
