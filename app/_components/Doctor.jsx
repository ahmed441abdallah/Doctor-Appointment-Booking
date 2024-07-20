import React from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const Doctor = ({ el }) => {
  return (
    <Link
      href={`/details/${el.id}`}
      key={el.id}
      className="block rounded-lg border-[1px] p-1 hover:border-primary transition-all ease-in-out duration-500 cursor-pointer hover:shadow-md  flex-col h-full"
    >
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <img
          className="rounded-t-lg w-full h-80"
          alt="doctor"
          src={el.attributes?.Image?.data?.attributes?.url}
        />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <button className="bg-[#AAD7D9] px-12 py-2 rounded-sm mb-2 text-primary">
          {el?.attributes?.categories?.data[0]?.attributes?.Name}
        </button>
        <h5 className="mb-2 text-lg font-bold">{el.attributes?.Name}</h5>
        <p className="mb-4 text-base text-gray-600">{el.attributes?.Address}</p>
        <div className="mt-auto">
          <Link href={`/details/${el?.id}`}>
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Doctor;
