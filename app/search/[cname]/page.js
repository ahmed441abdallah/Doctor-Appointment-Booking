"use client";
import React, { useEffect, useState } from "react";
import DoctorList from "../../_components/DoctorLits";

const Search = ({ params }) => {
  const [doctorList, setDoctorList] = useState([]);
  const getDoctorByCategory = async (category) => {
    try {
      // filter from docs
      const response = await fetch(
        `https://doctor-admin-production.up.railway.app/api/doctors?filters[categories][Name][$in]=${category}&populate=*`
      );
      const data = await response.json();
      setDoctorList(data.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getDoctorByCategory(params.cname);
  }, [params.cname]);
  return (
    <div>
      <DoctorList
        doctorList={doctorList}
        heading={`${params.cname}`}
      ></DoctorList>
    </div>
  );
};

export default Search;
