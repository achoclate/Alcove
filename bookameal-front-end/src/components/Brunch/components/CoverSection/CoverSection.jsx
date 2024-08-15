import React from "react";
import bgCoverImg from "../../assets/space.jpg";

const CoverSection = () => {
  const bgImage = {
    backgroundImage: `url(${bgCoverImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "500px",
    width: "100%",
  };

  return (
    <div style={bgImage}>
      <div className="h-[300px] flex justify-center items-center text-white">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Satisfy your cravings with us!
        </h1>
      </div>
    </div>
  );
};

export default CoverSection;
