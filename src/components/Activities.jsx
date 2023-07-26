import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="text-2xl font-bold text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Khách sạn
        </h3>
        <img
          className="w-full h-full object-cover border-4 border-white shadow-lg"
          src="../assets/images/4k2.jpg"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h3 className="text-2xl font-bold text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Khám phá biển
        </h3>
        <img
          className="w-full h-full object-cover border-4 border-white shadow-lg"
          src="../assets/images/4k3.jpg"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h3 className="text-2xl font-bold text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Du ngoạn
        </h3>
        <img
          className="w-full h-full object-cover border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Activities;
