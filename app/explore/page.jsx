import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              The easiest way to find the best Doctors, buy your medications
              online, and book an in-person appointment.
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="card"
                src="https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Your booking is automatically confirmed, as the doctor
                  specifies his working hours and is notified of the booking
                  details.
                </p>

                <p>
                  All your healthcare needs Search and book a clinic visit, home
                  visit, or a teleconsultation. Order your medicine and book a
                  service or operation, Both doctor's appointment and doctor
                  appointment are acceptable for describing a medical visit. In
                  the first case the 's, instead of showing possession, is
                  actually showing association; appointments of this nature are
                  associated with doctors. In the latter case, the noun doctor
                  is being used adjectivally to describe the type of
                  appointment.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="doctors"
                  src="https://images.unsplash.com/photo-1514416432279-50fac261c7dd?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  "Your Health, One Click Away"
                </h2>

                <p className="mt-4 text-gray-600">
                  Effortlessly manage your health with our innovative doctor
                  appointment app. Whether you need a routine check-up or
                  specialized care, booking appointments with top doctors has
                  never been easier. Access a network of trusted healthcare
                  professionals, view their profiles, and schedule visits at
                  your convenience. Say goodbye to long wait times and
                  complicated scheduling—your health is now just a click away.
                </p>

                <Link
                  href={"/"}
                  className="mt-8 inline-block rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
