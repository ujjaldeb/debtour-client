import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="single_testmonial text-center">
                  <div className="author_thumb">
                    <img
                      src="https://preview.colorlib.com/theme/travelo/img/testmonial/xauthor.png.pagespeed.ic.bYK1hmTXSr.webp"
                      alt="" />
                  </div>
                  <p>
                    "Working in conjunction with humanitarian aid agencies, we
                    have supported programmes to help alleviate human suffering.
                  </p>
                  <div className="testmonial_author">
                    <h3>- Tom Mouse</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
