import BookingDataBox from "../features/bookings/BookingDataBox";
import BookingDetail from "../features/bookings/BookingDetail";
import { useBooking } from "../features/bookings/useBooking";
import Spinner from "../ui/Spinner";

function Booking() {
  const { data: booking, isLoading } = useBooking();
  if (isLoading) return <Spinner />;
  return <BookingDetail booking={booking} />;
}

export default Booking;
