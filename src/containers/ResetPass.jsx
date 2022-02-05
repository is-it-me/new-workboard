import AuthPage from "../components/AuthPage";

const ResetPass = () => {
  return <AuthPage 
  pass={false}
  confPass={false}
  forgotPass={false}
  otherSign={false}
  leftButtonText={"Login"}
  rightButtonText={"Reset"}
  />
};

export default ResetPass;
