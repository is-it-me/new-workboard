import AuthPage from "../components/AuthPage";

const SignUp = () => {
  return <AuthPage 
  pass={true}
  confPass={true}
  forgotPass={false}
  otherSign={true}
  leftButtonText={"Login"}
  rightButtonText={"Sign Up"}
  />
};

export default SignUp;
