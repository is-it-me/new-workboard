import './authPage.css';

const AuthPage = ({ pass, confPass, forgotPass, otherSign, leftButtonText, rightButtonText }) => {
  return (
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-12">
        <div className="rounded-3">
          <div className="row g-0 flex-row-reverse auth-page">
            <div className="col-lg-6" style={{border: "none"}}>
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <h1 className="mt-1 mb-5 pb-1" style={{ color: "#FF7F58" }}>Workboard</h1>
                </div>

                <form className='auth-form'>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="formEmail">Email Address</label>
                    <input type="email" id="forEmail" className="form-control form-input-box" placeholder="Please enter email address" />
                  </div>

                  {pass && <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="forPass">Password</label>
                    <input type="password" id="forPass" className="form-control" placeholder='Please enter password' />
                  </div>}

                  {confPass && <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="forConfPass">Confirm Password</label>
                    <input type="password" id="forConfPass" className="form-control" placeholder='Please confirm password' />
                  </div>}
                  {forgotPass && <a to="#!" className="forgot-link">Forgot password?</a>}

                  <br />
                  <br />
                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" style={{ background: "white", color: "#FF7F58", border: "0", marginRight: "15vw" }} type="button">{leftButtonText}</button>
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" style={{ background: "#FF7F58", color: "#FFFFFF", border: "0" }} type="button"><span>{rightButtonText}</span>
                      <i className="bi-arrow-right"></i></button>
                  </div>
                  {otherSign && <div>
                    <p className='d-flex justify-content-center text-center mt-4 pt-1'>Or signin using</p>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1 social-links" style={{ marginLeft: "2.5vw" }}>
                      <a target={"_blank"} href={`https://www.fb.com`} className="text-decoration-none fs-2 md-3"><i className="bi bi-facebook"></i></a>
                      <a target={"_blank"} href={`https://www.gmail.com`} className="text-decoration-none fs-2 md-3"><i className="bi bi-google"></i></a>
                      <a target={"_blank"} href={`https://www.twitter.com`} className="text-decoration-none fs-2 md-3"><i className="bi bi-twitter"></i></a>
                    </div>a
                  </div>}

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <p className="mb-4">The only <br /> Board <br /> you need</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
