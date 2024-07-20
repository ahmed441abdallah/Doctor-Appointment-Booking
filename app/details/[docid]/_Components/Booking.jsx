import React, { use, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "../../../../components/ui/dialog";
import { Calendar } from "../../../../components/ui/calendar";
import { CalendarClockIcon, CalendarDaysIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import axios from "axios";
import { toast } from "sonner";

const Booking = ({ doctorInfo }) => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [note, setNote] = useState("");
  const { user } = useKindeBrowserClient(); // object
  console.log(user);
  // i need user data and doctor data
  // user data from kinde , doctor data pass from parent "doctorInfo"
  const bookAppointment = (data) => {
    axios
      .post(
        "https://doctor-admin-production.up.railway.app/api/appointments",
        data
      )
      .then((res) => {
        if (res) {
          postEmail(data);
          toast("Booking Confirmation will send to you via Email.", {
            description: `${date} , ${selectedTime}}`,
          });
        }
      });
  };
  const postEmail = (data) => {
    axios.post("/api/sendEmail", data);
  };
  const saveBooking = () => {
    const data = {
      data: {
        UserName: user.given_name + "" + user.family_name,
        Email: user.email,
        Date: date,
        Time: selectedTime,
        doctor: doctorInfo.id, // reference only
        Note: note,
      },
    };
    bookAppointment(data);
  };
  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: `${i}:00 AM `,
      });
      timeList.push({
        time: `${i}:30 AM`,
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({ time: `${i}:00 PM` });
      timeList.push({ time: `${i}:30 PM` });
    }
    setTimeSlot(timeList);
  };
  useEffect(() => {
    getTime();
  }, []);
  const isPastDay = (day) => {
    return day <= new Date();
  };
  console.log(note);
  return (
    <Dialog>
      <DialogTrigger>Make Appointment</DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Appointment ?</DialogTitle>
          <DialogDescription>
            <div>
              <div className=" grid grid-cols-1 md:grid md:grid-cols-2 mt-5 gap-2">
                <div className=" mt-2">
                  <h2 className=" flex gap-2 items-center">
                    <CalendarDaysIcon className=" text-primary" />
                    Select day
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                  ></Calendar>
                </div>
                <div>
                  <h2 className=" flex gap-2 items-center">
                    <CalendarClockIcon className=" text-primary mb-2" />
                    Select time
                  </h2>
                  <div className=" grid grid-cols-3 gap-2">
                    {timeSlot?.map((el, index) => (
                      <button
                        onClick={() => setSelectedTime(el.time)}
                        className={`p-2 rounded-md cursor-pointer hover:bg-primary hover:text-white  transition-all ease-in-out ${
                          el.time == selectedTime
                            ? "bg-primary text-white"
                            : "bg-slate-100"
                        }`}
                        key={index}
                      >
                        {el.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <Input
          placeholder="Note..."
          className="py-10 px-2"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        ></Input>
        <DialogFooter className=" justify-start sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button
            type="submit"
            disabled={!(selectedTime && date)}
            onClick={() => saveBooking()}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Booking;
