import React from "react";
import { FadeLoader } from "react-spinners";

function Loader() {
  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={loaderStyle}>
      <FadeLoader
        color="#131921"
        loading={true}
        height={15}
        width={5}
        radius={4}
        margin={2}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loader;
