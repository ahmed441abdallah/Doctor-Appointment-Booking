import React from "react";
import { Button } from "../../components/ui/button";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 mb-12 sm:mb-0   sm:h-80 lg:order-last lg:h-full">
              <img
                alt="hero"
                src="/Group 13.png"
                className="absolute inset-0  w-2/3 object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Find and Book{" "}
                <span className=" text-primary"> Appointment</span> with
                favorite <span className=" text-primary">Doctor</span>
              </h2>

              <p className="mt-4 text-gray-600">
                An account allows you to manage family doctors and insurance,
                book appointments, receive exclusive discounts on prescription
                medicine, compare doctors, get appointment reminders, and
                more...
              </p>
              <Link href={"#categories"}>
                <Button className="mt-10"> Explore Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
              <img
                alt="hero2"
                src="/Lifesavers Front Desk.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Appointment Scheduling{" "}
              </h2>

              <p className="mt-4 text-gray-600">
                Easily book, reschedule, or cancel appointments with healthcare
                providers through a user-friendly interface,Calendar
                integration, appointment reminders, notifications for
                rescheduled appointments, and availability checking
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded  bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className=" grid grid-cols-1 md:grid md:grid-cols-2 items-center mb-6 p-2 gap-16">
        <div>
          <p className=" text-primary"> Find Doctor</p>
          <h1 className=" font-bold text-2xl">
            Find the right doctor <br></br> according to your complaint
          </h1>
          <p className=" text-gray-600 leading-6 my-3">
            HealthCarely is a free, health app that goes beyond matching you
            with doctors, It actively helps you find the right doctor based on
            your medical and personal needs and connects you with your
            HealthCarely community for ongoing support throughout your journey
            to healthier living.
          </p>
          <span className=" flex gap-1">
            <CircleCheck /> 100% free app designed to help you find the right
            doctor for you.
          </span>
          <span className=" flex gap-1 mt-1">
            <CircleCheck /> Available 15 doctors specialist
          </span>
          <Link
            href={"#doctors"}
            className="mt-6 inline-block  bg-primary px-4 py-2 text-white rounded-sm "
          >
            See the Doctors
          </Link>
        </div>
        <img src="/doctors.jpg" className="w-10/12 hidden md:block"></img>
      </div>
    </div>
  );
};

export default Hero;
