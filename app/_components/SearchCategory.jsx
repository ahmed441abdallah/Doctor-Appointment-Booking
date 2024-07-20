"use client";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Category from "./Category";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const SearchCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://doctor-admin-production.up.railway.app/api/categories?populate=*"
      );
      const data = await response.json();
      setCategoryList(data.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4" id="categories">
      <h2 className="text-4xl font-bold tracking-wide">
        Search
        <span className="text-primary font-bold text-4xl tracking-wide">
          Doctors
        </span>
      </h2>
      <p className="text-gray-500 text-lg text-center">
        Search about your doctor and make appointment on one click
      </p>
      <div className="flex w-full max-w-sm items-center space-x-4">
        <Input type="text" placeholder="Search" />
        <Button type="submit">
          <Search size={20} className="me-2" />
          Search
        </Button>
      </div>
      {loading ? (
        <div className="mt-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <Skeleton
                width={150}
                height={150}
                style={{ marginTop: 10, marginBottom: 10 }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categoryList.map(
            (el, index) => index < 6 && <Category key={el.id} el={el} />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchCategory;
