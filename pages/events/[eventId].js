import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistic from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EvenDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event Found! </p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistic
        date={event.date}
        address={event.address}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistic>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EvenDetailPage;
