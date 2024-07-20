"use client";
import Hero from "./_components/Hero";
import SearchCategory from "./_components/SearchCategory";
import DoctorList from "./_components/DoctorLits";
import { CardHoverEffectDemo } from "./_components/Service";
import { useEffect, useState } from "react";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);
  const getDoctorList = async () => {
    try {
      const response = await fetch(
        "https://doctor-admin-production.up.railway.app/api/doctors?populate=*"
      );
      const data = await response.json();
      setDoctorList(data.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getDoctorList();
  }, []);
  return (
    <div>
      <Hero></Hero>
      <CardHoverEffectDemo></CardHoverEffectDemo>
      <SearchCategory></SearchCategory>
      <DoctorList doctorList={doctorList}></DoctorList>
    </div>
  );
}
