import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = ({ el }) => {
  return (
    <Link
      href={`/search/${el.attributes?.Name}`}
      key={el.id}
      className="flex flex-col gap-4 items-center bg-blue-50 p-5 rounded-sm "
    >
      <Image
        src={el.attributes?.Image?.data?.attributes?.url}
        width={100}
        height={100}
        alt="category"
      ></Image>
      <label> {el.attributes?.Name}</label>
    </Link>
  );
};

export default Category;
