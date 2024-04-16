import Stat from "./Stat";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numCabins, numDays }) {
  const numBookings = bookings?.length;

  //   2
  const sales = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);

  //   3
  const checkIns = confirmedStays.length;

  //   4
  const sumNights = bookings.reduce(
    (acc, booking) => acc + booking.numNights,
    0
  );

  const occupation = Math.round((sumNights / (numCabins * numDays)) * 100);

  return (
    <>
      <Stat
        title={"Booking"}
        value={numBookings}
        color={"blue"}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title={"Sales"}
        value={formatCurrency(sales)}
        color={"green"}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title={"Check ins"}
        value={checkIns}
        color={"indigo"}
        icon={<HiOutlineCalendar />}
      />
      <Stat
        title={"Occupation rate"}
        value={occupation + "%"}
        color={"yellow"}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
