import AuthPage from "../components/AuthPage";

const Login = () => {
  return <AuthPage 
  pass={true}
  confPass={false}
  forgotPass={true}
  otherSign={true}
  leftButtonText={"Sign Up"}
  rightButtonText={"Login"}
  />
};

export default Login;
