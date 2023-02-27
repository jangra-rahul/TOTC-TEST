import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function OurSuccess() {
  return (
    <>
      <section className="py-5">
        <Container className="pt-3">
          <h3 className="max_750 mx-auto text-center fs_48 fw_700 ff_nun color_black">
            Our Success
          </h3>
          <p className="max_750 mx-auto text-center fs_18 fw_400 ff_nun color_gray1">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.{" "}
          </p>
          <div className="row d-sm-flex d-none pt-md-5 pt-3 justify-content-center justify-content-between">
            <div className="col-md-2 col-6 mt-3 mt-md-0">
              <h2 className="fs_96 fw_300 ff_nun text_g mb-0 text-center">
                15K+
              </h2>
              <p className="fs_32 ff_400 ff_nun color_black mb-0 text-center">
                Students
              </p>
            </div>
            <div className="col-md-2 col-6 mt-3 mt-md-0">
              <h2 className="fs_96 fw_300 ff_nun text_g mb-0 text-center">
                75%
              </h2>
              <p className="fs_32 ff_400 ff_nun color_black mb-0 text-center">
                Total success
              </p>
            </div>
            <div className="col-md-2 col-6 mt-3 mt-md-0">
              <h2 className="fs_96 fw_300 ff_nun text_g mb-0 text-center">
                35
              </h2>
              <p className="fs_32 ff_400 ff_nun color_black mb-0 text-center">
                Main questions
              </p>
            </div>
            <div className="col-md-2 col-6 mt-3 mt-md-0">
              <h2 className="fs_96 fw_300 ff_nun text_g mb-0 text-center">
                26
              </h2>
              <p className="fs_32 ff_400 ff_nun color_black mb-0 text-center">
                Chief experts
              </p>
            </div>
            <div className="col-md-2 col-6 mt-3 mt-md-0">
              <h2 className="fs_96 fw_300 ff_nun text_g mb-0 text-center">
                16
              </h2>
              <p className="fs_32 ff_400 ff_nun color_black mb-0 text-center">
                Years of experience
              </p>
            </div>
          </div>
          <Carousel className="d-sm-none d-flex">
            <Carousel.Item>
              <div className="col-md-2 d-flex justify-content-center flex-column mx-auto    col-6 mt-3 mt-md-0">
                <h2 className="fs_96 fw_300 ff_nun text_g mb-0 text-center">
                  15K+
                </h2>
                <p className="fs_32 ff_400 ff_nun color_black mb-0 text-center">
                  Students
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-2 d-flex justify-content-center flex-column mx-auto   col-6 mt-3 mt-md-0">
                <h2 className="fs_96 fw_300 ff_nun text_g mb-0 text-center">
                  75%
                </h2>
                <p className="fs_32 ff_400 ff_nun color_black mb-0 text-center">
                  Total success
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-2 d-flex justify-content-center flex-column mx-auto   col-6 mt-3 mt-md-0">
                <h2 className="fs_96 fw_300 ff_nun text_g mb-0 text-center">
                  35
                </h2>
                <p className="fs_32 ff_400 ff_nun color_black mb-0 text-center">
                  Main questions
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-2 d-flex justify-content-center flex-column mx-auto   col-6 mt-3 mt-md-0">
                <h2 className="fs_96 fw_300 ff_nun text_g mb-0 text-center">
                  26
                </h2>
                <p className="fs_32 ff_400 ff_nun color_black mb-0 text-center">
                  Chief experts
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-2 d-flex justify-content-center flex-column mx-auto   col-6 mt-3 mt-md-0">
                <h2 className="fs_96 fw_300 ff_nun text_g mb-0 text-center">
                  16
                </h2>
                <p className="fs_32 ff_400 ff_nun color_black mb-0 text-center">
                  Years experience
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default OurSuccess;
