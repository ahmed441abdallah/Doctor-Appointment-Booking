import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import BookingList from "./_components/BookingList";

const MyBooking = () => {
  return (
    <div className=" px-4 sm:p-10">
      <h1 className=" text-2xl font-bold"> My Booking</h1>
      <Tabs defaultValue="Incoming" className="w-full mt-2">
        <TabsList className="px-10">
          <TabsTrigger value="Incoming">Incoming</TabsTrigger>
          <TabsTrigger value="Expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="Incoming">
          <BookingList></BookingList>
        </TabsContent>
        <TabsContent value="Expired">Change your Expired here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default MyBooking;
