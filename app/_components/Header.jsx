"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import Image from "next/image";

const Header = () => {
  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Contact Us ",
      path: "/contact",
    },
    {
      id: 3,
      name: "Explore",
      path: "/explore",
    },
  ];
  const { user } = useKindeBrowserClient();
  return (
    <div className="p-4 shadow-sm flex  items-center justify-between ">
      <div className=" flex gap-12 items-center">
        <Link href={"/"} className=" font-bold text-1xl">
          Healthy <span className=" text-primary">Carely</span>
        </Link>
        <ul className=" hidden md:flex gap-8">
          {menu.map((el) => (
            <Link key={el.id} href={el.path}>
              <li className=" hover:text-primary  cursor-pointer  hover:scale-105  transition-all ease-in-out">
                {el.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {user ? (
        <>
          <Popover>
            <PopoverTrigger>
              <Image
                width={50}
                height={50}
                src={user.picture}
                className=" rounded-full"
              ></Image>
            </PopoverTrigger>
            <PopoverContent>
              <ul>
                <Link href={"#"}>
                  <li>
                    <Button variant="ghost">Profile</Button>{" "}
                  </li>
                </Link>
                <Link href={"/booking"}>
                  <li>
                    <Button variant="ghost">My Appointment</Button>{" "}
                  </li>
                </Link>
                <LogoutLink postLogoutRedirectURL="/">
                  <li>
                    <Button variant="ghost"> Log Out</Button>
                  </li>
                </LogoutLink>
              </ul>
            </PopoverContent>
          </Popover>
        </>
      ) : (
        <LoginLink postLogintRedirectURL="/">
          <Button> Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
};

export default Header;
