import React from "react";
import { ClipLoader } from "react-spinners";

function LoadingComponent({loading}) {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <ClipLoader loading={loading} />
    </div>
  );
}

export default LoadingComponent;
