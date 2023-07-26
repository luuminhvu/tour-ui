import React from "react";

const Booking = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full p-4">
      <form
        id="deals"
        className="w-full lg:flex lg:justify-between items-center"
      >
        <div className="flex flex-col my-2 py-2">
          <label htmlFor="place">Điểm đến</label>
          <select id="place" className="lg:w-[300px] border rounded-md p-2">
            <option value="volvo">Hà Nội</option>
            <option value="saab">Hồ Chí Minh</option>
            <option value="mercedes">Đà Nẵng</option>
            <option value="audi">Hải Phòng</option>
          </select>
        </div>

        <div className="flex w-full">
          <div className="flex flex-col w-full my-2 p-2">
            <label className="">Ngày đến</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col w-full my-2 p-2">
            <label className="">Ngày đi</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
        </div>
        <div className="flex flex-col lg:w-[250px] my-2 p-2">
          <label>Tìm kiếm</label>
          <button className="w-full">Tìm kiếm</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
