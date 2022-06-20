import { getAllEvents } from "../../helpers/api-util";
import EvenList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

function AllEventsPage(props) {
  const { events } = props;
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}/abc`;

    router.push(fullPath);
  }

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Fnd your event here"></meta>
      </Head>
      <Fragment>
        <EventsSearch onSearch={findEventsHandler}></EventsSearch>
        <EvenList items={events}></EvenList>
      </Fragment>
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
