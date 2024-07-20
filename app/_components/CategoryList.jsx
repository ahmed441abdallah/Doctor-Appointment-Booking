"use client";
import React, { useEffect, useState } from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CategoryList = () => {
  const [categoryItem, setCategoryItem] = useState([]);
  const params = usePathname();
  const category = params.split("/")[2];

  const getAllCategories = async () => {
    try {
      const response = await fetch(
        "https://doctor-admin-production.up.railway.app/api/categories?populate=*"
      );
      const data = await response.json();
      setCategoryItem(data.data);
      console.log("category", categoryItem);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="h-[80vh]">
      <Command className="rounded-lg border shadow-md ">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryItem?.map((el) => (
              <CommandItem key={el.id}>
                <Link
                  href={`/search/${el.attributes.Name}`}
                  className={`flex items-center justify-center gap-1 px-6 py-1 rounded-sm ${
                    category == el?.attributes?.Name && " bg-blue-200"
                  } `}
                >
                  <Image
                    src={el.attributes?.Image?.data?.attributes?.url}
                    width={25}
                    height={25}
                    alt="category"
                  ></Image>
                  <span>{el?.attributes?.Name}</span>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
