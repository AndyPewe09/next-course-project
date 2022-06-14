import { getAllEvents, getFeaturedEvents } from "../helpers/api-util";
import EvenList from "../components/events/EventList";
import useSWR from "swr";
import { useEffect } from "react";

function HomePage(props) {
  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <ul>
        <EvenList items={props.events}></EvenList>
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  };
}

export default HomePage;
