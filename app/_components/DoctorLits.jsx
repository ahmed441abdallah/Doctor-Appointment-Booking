import React from "react";
import Doctor from "../_components/Doctor";
import Skeleton from "react-loading-skeleton";

const DoctorList = ({ doctorList, heading = "Popular Doctors" }) => {
  return (
    <div className="p-4" id="doctors">
      <h1 className="text-xl font-bold">{heading}</h1>
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 gap-4 mt-4 md:grid-cols-4">
        {doctorList.length > 0
          ? doctorList.map((el) => <Doctor key={el.id} el={el}></Doctor>)
          : [...Array(8)].map((_, index) => (
              <Skeleton key={index} width={300} height={300}></Skeleton>
            ))}
      </div>
    </div>
  );
};

export default DoctorList;
