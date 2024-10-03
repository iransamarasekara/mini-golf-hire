import BookingForm1 from "@/components/BookingForm1";

const BookNow = () => {
  return (
    <div className="overflow-hidden px-[5%] lg:px-[10%] mt-15">
      <h5 className="w-full flex justify-center underline text-xl font-semibold">
        Booking Details
      </h5>
      <BookingForm1 />
    </div>
  );
};

export default BookNow;
