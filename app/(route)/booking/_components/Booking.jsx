import React from "react";
import { Calendar, Clock, MapPin, User, UserCircle2Icon } from "lucide-react";
import Image from "next/image";
import CancelBooking from "./CancelBooking";
import moment from "moment";

const Booking = ({ el, cancelBooking }) => {
  return (
    <div
      key={el.id}
      className=" shadow-md w-[500px]  p-4 rounded-md mb-2 flex gap-4 items-center "
    >
      <Image
        src={
          el.attributes?.doctor?.data?.attributes?.Image?.data?.attributes?.url
        }
        alt="doc-image"
        width={100}
        height={100}
        className=" rounded-md w-[100px] h-[100px]"
      ></Image>
      <div>
        <h2 className="flex gap-1 items-center mb-2 text-gray-500 ">
          <UserCircle2Icon></UserCircle2Icon>
          {el?.attributes?.UserName}
          <CancelBooking cancelBooking={cancelBooking} el={el}></CancelBooking>
        </h2>
        <h2 className="flex gap-1 items-center mb-2 font-bold">
          <User></User>
          {el?.attributes?.doctor?.data?.attributes?.Name}
        </h2>
        <h2 className="flex gap-1 items-center mb-2">
          <MapPin></MapPin>
          {el?.attributes?.doctor?.data?.attributes?.Address}
        </h2>
        <h2 className="flex gap-1 items-center mb-2">
          <Calendar></Calendar>
          Appointment On: {moment(el?.attributes?.Date).format("MMMM Do YYYY")}
        </h2>
        <h2 className="flex gap-1 items-center mb-2">
          <Clock></Clock>
          At Time: {el?.attributes?.Time}
        </h2>
      </div>
    </div>
  );
};

export default Booking;
