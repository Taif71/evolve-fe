import React from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("../../components/Loader/loader"));

const LoginComponent = dynamic(() => import("./components/login"), {
  loading: () => <Loader />,
});

const LoginPage = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <p className="text text-[32px] font-bold leading-[44px] text-[#3D3E46]">
          Evolve College Login Portal
        </p>
      </div>
      <div>
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
