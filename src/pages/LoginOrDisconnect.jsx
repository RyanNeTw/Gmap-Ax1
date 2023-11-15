import { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import CreateAccountComponent from "../components/CreateAccountComponent";
import ArrowRealod from "../assets/ArrowReload";

function LoginOrDisconnect() {
  const [isLogin, setIsLogin] = useState(true);

  function ChooseOperation() {
    setIsLogin(!isLogin);
  }

  return (
    <>
      <div className="flex justify-center min-h-screen items-center flex-col">
        {isLogin ? <LoginComponent /> : <CreateAccountComponent />}

        <div
          onClick={() => ChooseOperation()}
          className="flex flex-row gap-2 items-center cursor-pointer"
        >
          <button className="text-black">
            {isLogin ? "Sign up" : "Sign in"}
          </button>
          <ArrowRealod />
        </div>
      </div>
    </>
  );
}

export default LoginOrDisconnect;
