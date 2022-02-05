import "./textImage.css";

import { Link } from "react-router-dom";

const TextImage = ({ heading, text, enablebutton, rowReverse, image }) => {
  const isReverse = rowReverse ? " flex-row-reverse" : "";
  return (
    <div>
      <section className="textImage d-flex">
        <div className="container">
          <div className={`row${isReverse}`}>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 className="animate__animated animate__fadeInUp main">
                {heading}
              </h1>
              <p className="animate__animated animate__fadeInUp text">{text}</p>
              {enablebutton && (
                <div className="animate__animated animate__fadeInUp tour">
                  <div className="text-center text-lg-start">
                    <Link
                      to="/"
                      className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Get Started</span>
                      <i className="bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-6 land-img animate__animated animate__zoomIn">
              <img src={image} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextImage;
