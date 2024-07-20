import React from "react";
import { HoverEffect } from "../../components/ui/card-hover-effect"; // Adjust the import path as needed

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h1 className=" text-3xl font-bold  text-center tracking-wide">
        Our Services 👨‍⚕️
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Virtual Consultations",
    description:
      "Easily book, reschedule, or cancel appointments with healthcare providers through a user-friendly interface, Calendar integration, appointment reminders, notifications for rescheduled appointments.",
  },
  {
    title: "Appointment Scheduling",
    description:
      "Book, reschedule, or cancel appointments with healthcare providers,Connect with healthcare providers via video calls phone calls, or chat for remote consultations.",
  },
  {
    title: "Health Records",
    description:
      "Set reminders for medications, appointments, and follow-up visits,View, download, and share personal medical records, including lab results, imaging, and doctor notes.",
  },
  {
    title: "Health Monitoring ",
    description:
      "rack vital health metrics like blood pressure, heart rate, glucose levels, and more, often integrated with wearable devices",
  },
  {
    title: "Symptom Checker ",
    description:
      "Interactive symptom questionnaire, risk assessment, and guidance on when to seek professional help",
  },
  {
    title: "Emergency Services",
    description:
      "One-click call to emergency services, GPS-based hospital locator, and emergency instructions.",
  },
];
