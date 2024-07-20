"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import Booking from "./Booking";
import { toast } from "sonner";
const BookingList = () => {
  const { user } = useKindeBrowserClient();
  const [bookingList, setBookingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getBookingByEmail = async (email) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://doctor-admin-production.up.railway.app/api/appointments?filters[Email][$eq]=${email}&populate[doctor][populate][Image][populate][0]=url&popualte=*`
      );
      const data = await response.json();
      setBookingList(data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getBookingByEmail(user?.email);
  }, [user?.email]);
  const cancelBooking = (id) => {
    axios
      .delete(
        `https://doctor-admin-production.up.railway.app/api/appointments/${id}`
      )
      .then((res) => {
        if (res) {
          toast("Booking Deleted Successfully");
          const newBookingList = bookingList.filter((el) => el.id !== id);
          setBookingList(newBookingList);
        }
      });
  };
  return (
    <div>
      {isLoading && (
        <>
          {" "}
          <Skeleton width={300} height={150}></Skeleton>
          <Skeleton width={300} height={150}></Skeleton>
        </>
      )}
      {bookingList.length >= 1 ? (
        bookingList.map((el) => (
          <Booking el={el} key={el.id} cancelBooking={cancelBooking}></Booking>
        ))
      ) : (
        <>
          <h1 className=" text-xl text-gray-500">
            You do not have Any Appointment
          </h1>
        </>
      )}
    </div>
  );
};

export default BookingList;
