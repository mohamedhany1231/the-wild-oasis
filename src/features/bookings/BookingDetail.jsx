import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare, HiTrash } from "react-icons/hi2";
import { useCheckout } from "./useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail({ booking }) {
  const navigate = useNavigate();

  const moveBack = useMoveBack();
  const { checkout, isCheckingout } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  if (!booking) return <Empty resource="Booking" />;
  const { id: bookingId, status } = booking;

  return (
    <>
      <Modal>
        <Row type="horizontal">
          <HeadingGroup>
            <Heading as="h1">Booking #{bookingId}</Heading>
            <Tag type={statusToTagName[status]}>
              {booking.status.replace("-", " ")}
            </Tag>
          </HeadingGroup>
          <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
        </Row>

        <BookingDataBox booking={booking} />

        <ButtonGroup>
          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>

          {status === "unconfirmed" && (
            <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
              check in
            </Button>
          )}

          {status === "checked-in" && (
            <Button
              icon={<HiArrowUpOnSquare />}
              onClick={() => checkout(bookingId)}
              disabled={isCheckingout}
            >
              check out
            </Button>
          )}

          <Modal.Open opens={"delete"}>
            <Button
              icon={<HiTrash />}
              disabled={isDeleting}
              $variation="danger"
            >
              Delete Booking
            </Button>
          </Modal.Open>
        </ButtonGroup>

        <Modal.Window name={"delete"}>
          <ConfirmDelete
            resourceName={"booking"}
            onConfirm={() =>
              deleteBooking(bookingId, { onSettled: () => navigate(-1) })
            }
          />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default BookingDetail;
