import Head from 'next/head'

import { getAllEvents, getFeaturedEvents } from "../helpers/api-util";
import EvenList from "../components/events/EventList";
import useSWR from "swr";
import { useEffect } from "react";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name='description' content='Fnd your event here'></meta>
      </Head>
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
    revalidate: 10
  };
}

export default HomePage;
