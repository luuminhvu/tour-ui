import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="../assets/images/4k.jpg"
        alt="hero"
        className="w-full h-[full] object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[20%] w-ful md:top-[40%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="text-4xl text-white font-bold">Tìm kiếm Tour</h1>
          <h1 className="text-4xl italic py-4">Để tận hưởng cuộc sống</h1>
          <p className="">Nhanh chóng, dễ dàng, tiện lợi , an toàn</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
